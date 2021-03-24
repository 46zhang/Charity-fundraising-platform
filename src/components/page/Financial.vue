<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-calendar"></i> 表单
                </el-breadcrumb-item>
                <el-breadcrumb-item>基本表单</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">

            <div class="form-box">

                <el-form ref="form" :model="form" label-width="80px">

                    <el-form-item label="项目信息">
                        <el-select v-model="form.projectId" placeholder="项目id" size="400px">
                            <el-option
                                    v-for="item in project"
                                    :key="item.projectId"
                                    :value="item.projectId"
                                    :label="item.projectName"
                            >
                                <span style="float: right">{{ item.projectId }}</span>
                                <span style="float: left">{{ item.projectName }}</span>
                            </el-option>

                        </el-select>

                    </el-form-item>

                    <el-form-item label="收钱节点">
                        <el-select v-model="form.toAddress" placeholder="节点id" size="400px">
                            <el-option
                                    v-for="item in node"
                                    :key="item.id"
                                    :value="item.id"
                                    :label="item.name"
                            >
                                <span style="float: left">{{ item.name }}</span>
                                <span style="float: right">{{ item.id }}</span>
                            </el-option>

                        </el-select>

                    </el-form-item>

                    <el-form-item label="付款用户">
                        <el-select v-model="form.formUserId" placeholder="付款用户" size="400px">
                            <el-option
                                    v-for="item in user"
                                    :key="item.userId"
                                    :value="item.userId"
                                    :label="item.userName"
                            >
                                <span style="float: left">{{ item.userName }}</span>
                                <span style="float: right">{{ item.userId }}</span>
                            </el-option>

                        </el-select>

                    </el-form-item>

                    <el-form-item label="交易数额">
                        <el-input v-model="form.money"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">提交</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    import { fetchData } from '../../api/index';
    import { createTransaction, getNodeList, getProjectList, getUserList } from '../../api/financial';

    export default {
        name: 'financial',
        data() {
            return {
                project: [{
                    projectId: '',
                    projectName: '',
                    projectMoneyNow: 0
                }],
                node: [{
                    id: '',
                    name: ''
                }],
                user: [{
                    userId: '',
                    userName: ''
                }],
                form: {
                    formUserId:'',
                    toAddress: '',
                    projectId: '',
                    money: 0
                }
            };
        },
        created() {
            //TODO 如果超过1w个活动会存在问题
            this.getProjectList();
        },
        methods: {
            async getProjectList() {
                this.project = (await getProjectList({ pageSize: 10000, pageIndex: 0 })).data.project;
                this.node = (await getNodeList()).data;
                this.user=(await getUserList()).data;
            },
            // 获取 easy-mock 的模拟数据
            getData() {
                // //TODO 如果超过1w个活动会存在问题
                // getProjectList({ pageSize: 10000, pageIndex: 1 }).then(res => {
                //
                //     this.project=res.data;
                //
                //     console.log("projectSize:" + this.project.length);
                //     for (i = 0; i < this.project.length; ++i) {
                //         console.log(this.project[i]);
                //     }
                // });
                // getNodeList().then(res => {
                //     this.node=res.data;
                //     console.log("node:" + this.node);
                // });
            },
            onSubmit() {
                let _this = this;
                //格式化一下时间
                _this.form.projectStartTime += " " + _this.value1;
                _this.form.projectFinishTime += " " + _this.value2;
                createTransaction(_this.form).then(res => {
                    if (res.isSuccess) {
                        alert("创建成功");
                        //TODO  redirct to get activity List page
                        this.$router.push('/dashboard')
                    } else {
                        alert(res.msg);
                    }
                });
            },
            // 触发搜索按钮
            handleSearch() {
                this.$set(this.query, 'pageIndex', 1);
                this.getData();
            }
            ,
            // 删除操作
            handleDelete(index, row) {
                // 二次确认删除
                this.$confirm('确定要删除吗？', '提示', {
                    type: 'warning'
                })
                    .then(() => {
                        this.$message.success('删除成功');
                        this.tableData.splice(index, 1);
                    })
                    .catch(() => {
                    });
            }
            ,
            // 多选操作
            handleSelectionChange(val) {
                this.multipleSelection = val;
            }
            ,
            delAllSelection() {
                const length = this.multipleSelection.length;
                let str = '';
                this.delList = this.delList.concat(this.multipleSelection);
                for (let i = 0; i < length; i++) {
                    str += this.multipleSelection[i].name + ' ';
                }
                this.$message.error(`删除了${str}`);
                this.multipleSelection = [];
            }
            ,
            // 编辑操作
            handleEdit(index, row) {
                this.idx = index;
                this.form = row;
                this.editVisible = true;
            }
            ,
            // 保存编辑
            saveEdit() {
                this.editVisible = false;
                this.$message.success(`修改第 ${this.idx + 1} 行成功`);
                this.$set(this.tableData, this.idx, this.form);
            }
            ,
            // 分页导航
            handlePageChange(val) {
                this.$set(this.query, 'pageIndex', val);
                this.getData();
            }
        }
    };
</script>

<style scoped>
    .handle-box {
        margin-bottom: 20px;
    }

    .handle-select {
        width: 120px;
    }

    .handle-input {
        width: 300px;
        display: inline-block;
    }

    .table {
        width: 100%;
        font-size: 14px;
    }

    .red {
        color: #ff0000;
    }

    .mr10 {
        margin-right: 10px;
    }

    .table-td-thumb {
        display: block;
        margin: auto;
        width: 40px;
        height: 40px;
    }
</style>
