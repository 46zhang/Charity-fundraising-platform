<template>
    <div>
        <template>
            <el-table
                    :data="fund"
                    height="650"
                    border
                    style="width: 100%"
                    :default-sort="{prop: 'blockIndex', order: 'descending'}"
            >
                <el-table-column
                        prop="blockIndex"
                        label="区块号"
                        width="180"
                        sortable>
                </el-table-column>
                <el-table-column
                        prop="blockHash"
                        label="交易区块编号"
                        width="180"
                        sortable>
                </el-table-column>
                <el-table-column
                        prop="txId"
                        label="交易编号"
                        width="180"
                        sortable>
                </el-table-column>
                <el-table-column
                        prop="money"
                        label="交易金额"
                        width="180"
                        sortable>
                </el-table-column>
                <el-table-column
                        prop="from"
                        label="支付节点"
                        sortable>
                </el-table-column>
                <el-table-column
                        prop="to"
                        label="收款节点"
                        sortable>
                </el-table-column>
                <el-table-column
                        prop="userId"
                        label="所属用户id"
                        sortable>
                    <template scope="scope">
                        <router-link :to="{path:'/userDonate', query: { userId: scope.row.userId }}">
                            {{scope.row.userId}}
                        </router-link>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="projectId"
                        label="所属项目"
                        sortable>
                    <template scope="scope">
                        <router-link :to="{path:'/projectDonate', query: { projectId: scope.row.projectId }}">
                            {{scope.row.projectId}}
                        </router-link>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="time"
                        label="交易时间"
                        sortable>
                </el-table-column>

                <!--                <el-table-column label="操作" fixed="right">-->
                <!--                    <template scope="scope">-->
                <!--                        <el-button-->
                <!--                                size="mini"-->
                <!--                                type="primary"-->
                <!--                                @click="getUserContribution(scope.$index, scope.row)">用户捐款-->
                <!--                        </el-button>-->
                <!--                        <el-button-->
                <!--                                size="mini"-->
                <!--                                type="info"-->
                <!--                                @click="getProjectFund(scope.$index, scope.row)">项目捐款-->
                <!--                        </el-button>-->
                <!--                    </template>-->
                <!--                </el-table-column>-->
            </el-table>
        </template>
    </div>
</template>

<script>
    import { getAllBlock } from '../../api/financial';

    export default {
        name: 'donate',
        data() {
            return {
                fund: [{
                    blockIndex: '',

                    txId: '',

                    blockHash: '',

                    userId: '',

                    projectId: '',

                    from: '',

                    to: '',

                    time: '',

                    money: ''
                }]
            }
        },
        created() {
            // console.log(this.pageIndex - 1)
            //在新进入时先获取活动
            this.getAllBlock()
        },
        methods: {
            async getAllBlock() {
                const { isSuccess, msg, data } = await getAllBlock();
                if (isSuccess === true) {
                    this.fund = data;
                } else {
                    alert(msg)
                }

            },
            //跳转到捐款页面
            getUserContribution(index, row) {
                console.log("要传的id:" + row.userId);
                let userId = row.userId;
                this.$router.push({
                    path: '/userDonate', params: {
                        userId: userId
                    }
                });
            },
            getProjectFund(index, row) {

            }
        }
    };
</script>

<style>
</style>
