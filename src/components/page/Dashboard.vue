<template>
    <div id="dashboard">
        <div class="flex-container">
            <div class="item" v-for="(item,index) of project" :key="index">
                <el-card shadow="hover" class="mgb20">
                    <div class="user-info">
                        <el-col span="10">
                            <div class="activity-image-info">
                                <img :src="item.projectPhoto" class="activity-avatar" alt/>
                            </div>
                        </el-col>
                        <el-col span="10">
                            <div class="activity-text-info">
                                <el-row>
                                    <h3>募捐活动标题:</h3>
                                    <div class="activity-text-info-title">
                                        {{item.projectName}}
                                    </div>
                                </el-row>
                                <el-row>
                                    <h3>募捐金额:</h3>
                                    <div class="activity-text-info-title">
                                        {{item.projectMoneyNow}}
                                    </div>
                                </el-row>
                                <el-row>
                                    <h3>捐款人数:</h3>
                                    <div class="activity-text-info-text">
                                        {{item.projectPeopleNums}}
                                    </div>
                                </el-row>
                                <el-row class="activity-text-info-button">
                                    <el-button type="primary">查看详情</el-button>
                                </el-row>
                            </div>
                        </el-col>
                    </div>
                </el-card>
            </div>
        </div>

        <el-row>
            <div class="pagination">
                <el-pagination
                        background
                        layout="total, prev, pager, next"
                        :current-page="pageIndex"
                        :page-size="pageSize"
                        :total="totalPage"
                        @current-change="handlePageChange"
                ></el-pagination>
            </div>


        </el-row>
    </div>
</template>

<script>
    import bus from '../common/bus';
    import { getActivityList } from '../../api/activity';

    export default {
        name: 'dashboard',
        data() {
            return {
                pageIndex: 1,
                pageSize: 4,
                totalPage: 0,
                project: [
                    {
                        projectId: '1',
                        projectPhoto: '',
                        projectPeopleNums: 200,
                        projectName: 'MINGCHENG',
                        projectMoneyNow: 36.25
                    },
                    {
                        projectId: '2',
                        projectPhoto: '',
                        projectPeopleNums: 200,
                        projectName: 'MINGCHENG',
                        projectMoneyNow: 36.25
                    },
                    {
                        projectId: '3',
                        projectPhoto: '',
                        projectPeopleNums: 200,
                        projectName: 'MINGCHENG',
                        projectMoneyNow: 36.25
                    },
                    {
                        projectId: '4',
                        projectPhoto: '',
                        projectPeopleNums: 200,
                        projectName: 'MINGCHENG',
                        projectMoneyNow: 36.25
                    },
                ]
            };
        },
        created() {
            console.log(this.pageIndex - 1)
            //在新进入时先获取活动
            this.getList(this.pageIndex - 1)
        },
        methods: {
            // 分页导航
            handlePageChange(val) {
                this.pageIndex = val;
                this.getList(val - 1);
            },
            async getList(pageIndex) {
                const { isSuccess, msg, data } = await getActivityList({
                    pageIndex: pageIndex,
                    pageSize: this.pageSize
                });
                if (isSuccess === true) {
                    this.pageIndex = data.pageIndex + 1;
                    this.pageSize = data.pageSize;
                    this.totalPage = data.totalPage;
                    this.project = data.project;
                } else {
                    alert(msg)
                }

            }
        }
    };
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
        margin-bottom: 10px;
        height: 280px;
    }

    .item {
        width: 45%;
        /*height: 400px;*/
        margin: 10px 20px;
    }

    .flex-container {
        position: relative;
        display: flex;
        flex-flow: row wrap;
    }
</style>
