<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="12">
                <el-card shadow="hover" class="mgb20">
                    <el-col span="10">
                        <div class="activity-image-info">
                            <img src="../../assets/img/img.jpg" class="activity-avatar" alt/>
                        </div>
                    </el-col>
                    <el-col span="10">
                        <div class="activity-text-info">
                            <el-row>
                                <h3>募捐活动标题:</h3>
                                <div class="activity-text-info-title">
                                    AOIFHAOHFAFAFANFLADBFLADFAUOGUOGOHUAGUGUGGYGYGYYFGF
                                </div>
                            </el-row>
                            <el-row>
                                <div class="user-info-list">项目开始时间：<span>2018-01-01 00:00:00</span></div>
                            </el-row>
                            <el-row>
                                <div class="user-info-list">项目结束时间：<span>2022-01-01 00:00:00</span></div>
                            </el-row>
                        </div>
                    </el-col>
                </el-card>
                <el-card shadow="hover" style="height:352px;">
                    <div slot="header" class="clearfix">
                        <span>项目介绍</span>
                    </div>
                    <div>
                        sfdaofhadhufhda iaufau if
                        afgsuidfhglsidglisdg
                        adsfbsidbfuisdg
                        sdnhgsdhgosdhgosdg
                        sdgosdhgohsodgsdg
                        sdohgosdhgohsdgohsg
                        sdbgosdhgsdg
                        shgoishgoisfdg
                        sdhgsdhg
                        egfoishguhsuighsduighusodhgoisdhgsdhg
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
                                    <div class="grid-num">1234</div>
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
                                    <div class="grid-num">32100</div>
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
                                    <div class="grid-num">5000</div>
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

                                    v-model="form.amnount"

                                    placeholder="请输本次募捐金额"

                                    :size="size"

                                    style="width:100%"

                                    clearable

                                    :disabled="disable"

                            ></el-input>
                        </el-row>

                        <el-row>
                            <el-input
                                    placeholder="输入支付密码"
                                    v-model="form.password"
                                    clearable>
                            </el-input>
                        </el-row>
                        <span></span>
                        <el-button type="primary">确认支付</el-button>
                    </el-form>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "ActivityDetail",

        data() {
            return {
                form:{
                    amount: "",
                    password: ""
                }
            };
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

    .user-info {
        display: flex;
        align-items: flex-start;
        padding-bottom: 20px;
        border-right: 2px solid #ccc;
        margin-bottom: 20px;
    }

    .activity-avatar {
        width: 240px;
        height: 250px;
    }

    .user-info-cont {
        /*padding-left: 50px;*/
        flex: 1;
        color: #999;
        margin-right: 20px;
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

    .activity-text-info-button {
        align-items: flex-end;
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
