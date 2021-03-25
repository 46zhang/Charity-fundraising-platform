<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="12">
                <el-card shadow="hover" class="mgb20">
                    <el-col span="10">
                        <div class="activity-image-info">
                            <img :src=project.projectPhoto class="activity-avatar" alt/>
                        </div>
                    </el-col>
                    <el-col span="10">
                        <div class="activity-text-info">
                            <el-row>
                                <h3>募捐活动标题:</h3>
                                <div class="activity-text-info-title">
                                    {{project.projectName}}
                                </div>
                            </el-row>
                            <el-row>
                                <h3>募捐活动状态:</h3>
                                <div class="activity-text-info-title">
                                    {{project.projectState}}
                                </div>
                            </el-row>
                            <el-row>
                                <div class="user-info-list">项目开始时间：<span>{{project.projectStartTime}}</span></div>
                            </el-row>
                            <el-row>
                                <div class="user-info-list">项目结束时间：<span>{{project.projectFinishTime}}</span></div>
                            </el-row>
                        </div>
                    </el-col>
                </el-card>
                <el-card shadow="hover" style="height:352px;">
                    <div slot="header" class="clearfix">
                        <span>项目介绍</span>
                    </div>
                    <div>
                        {{project.projectExplain}}
                    </div>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-row :gutter="20" class="mgb10">
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-1">
                                <i class="el-icon-lx-people grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">{{project.projectPeopleNums}}</div>
                                    <div>募捐人次</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-2">
                                <i class="el-icon-lx-notice grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">￥1000000</div>
                                    <div>目标金额</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-3">
                                <i class="el-icon-lx-goods grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">{{project.projectMoneyNow}}</div>
                                    <div>实际募捐金额</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
                <el-card shadow="hover" style="height:550px;">
                    <el-form ref="form" :model="form" label-width="80px">
                        <el-row class="el-row">
                            <el-input

                                    maxlength="8"

                                    oninput="value=value.replace(/[^\d.]/g,'')"

                                    v-model="form.amount"

                                    placeholder="请输本次募捐金额"

                                    :size="size"

                                    style="width:100%"

                                    clearable

                                    :disabled="disable"

                            ></el-input>
                        </el-row>
                        <span></span>
                        <el-button type="primary" @click="doDonate">确认支付</el-button>
                    </el-form>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import { donate, getActivityDetail } from '../../api/activity';

    export default {
        name: "ActivityDetail",
        created() {
            //获取数据
            this.getDetail(this.$route.query.id)
        },
        data() {
            return {
                project: {
                    userId: "发起项目的用户的id",
                    projectId: "项目id",
                    projectStartTime: "开始时间",//yyyy-MM-dd HH:mm:ss
                    projectFinishTime: "结束时间",
                    projectState: "项目状态",
                    projectName: "项目名字",
                    projectPeopleNums: "项目捐款人次",
                    projectMoneyTarget: "目标金额",
                    projectMoneyNow: "已获得金额",
                    projectPhoto: "项目头像",
                    projectExplain: "项目简介",
                },
                form: {
                    amount: 0
                }
            };
        },
        methods: {
            //获取数据
            async getDetail(id) {
                const { isSuccess, msg, data } = await getActivityDetail({
                    projectId: id
                });
                if (isSuccess === true) {
                    this.project = data;
                } else {
                    alert(msg)
                }
            },
            doDonate() {
                donate({
                    projectId: this.project.projectId,
                    money: this.form.amount
                }).then(res => {
                    if (res.isSuccess) {
                        alert("创建成功");
                    } else {
                        alert(res.msg);
                    }
                }
                    );
            }
        }
    }
</script>

<style scoped>
    .el-row {
        margin-bottom: 20px;
    }

    .grid-content {
        display: flex;
        align-items: center;
        height: 100px;
    }

    .grid-cont-right {
        flex: 1;
        text-align: center;
        font-size: 14px;
        color: #999;
    }

    .grid-num {
        font-size: 30px;
        font-weight: bold;
    }

    .grid-con-icon {
        font-size: 50px;
        width: 100px;
        height: 100px;
        text-align: center;
        line-height: 100px;
        color: #fff;
    }

    .grid-con-1 .grid-con-icon {
        background: rgb(45, 140, 240);
    }

    .grid-con-1 .grid-num {
        color: rgb(45, 140, 240);
    }

    .grid-con-2 .grid-con-icon {
        background: rgb(100, 213, 114);
    }

    .grid-con-2 .grid-num {
        color: rgb(45, 140, 240);
    }

    .grid-con-3 .grid-con-icon {
        background: rgb(242, 94, 67);
    }

    .grid-con-3 .grid-num {
        color: rgb(242, 94, 67);
    }


    .activity-avatar {
        width: 240px;
        height: 250px;
    }


    .activity-image-info {
        font-size: 14px;
        color: #999;
        margin-right: 20px;
    }

    .activity-text-info {
        font-size: 14px;
        margin-right: 20px;
    }

    .activity-text-info-title {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .activity-text-info-text {
        /*overflow: hidden;*/
        /*text-overflow: ellipsis;*/
        /*white-space: normal;*/

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
    }


    .user-info-cont div:first-child {
        font-size: 30px;
        color: #222;
    }


    .mgb20 {
        margin-bottom: 20px;
        height: 300px;
    }

    .mgb10 {
        margin-bottom: 20px;
        height: 100px;
    }
</style>
