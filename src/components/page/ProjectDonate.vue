<template>
    <div class="block">
        <el-timeline>
            <div v-for="(item,index) in fund">
                <div v-if="item.coinBase">
                    <el-timeline-item placement="top"
                                      :key="index"
                                      :icon="'el-icon-plus'"
                                      :type="'success'"
                                      :size="'large'"
                                      :timestamp="item.time"
                    >
                        <el-card>
                            <h3>项目名称: {{item.projectName}}</h3>
                            <span></span>
                            <p>用户 {{item.userName}}</p>
                            <p>金额 {{item.money}}</p>
                            <p>付钱节点 {{item.from}}</p>
                            <p>收钱节点 {{item.to}}</p>
                        </el-card>
                    </el-timeline-item>
                </div>

                <div v-if="!item.coinBase">
                    <el-timeline-item placement="top"
                                      :key="index"
                                      :icon="'el-icon-minus'"
                                      :type="'danger'"
                                      :size="'large'"
                                      :timestamp="item.time"
                    >
                        <el-card>
                            <h3>项目名称: {{item.projectName}}</h3>
                            <span></span>
                            <p>用户 {{item.userName}}</p>
                            <p>金额 {{item.money}}</p>
                            <p>付钱节点 {{item.from}}</p>
                            <p>收钱节点 {{item.to}}</p>
                        </el-card>
                    </el-timeline-item>
                </div>


            </div>
        </el-timeline>
    </div>
</template>

<script>
    import { getAllBlock, getOneProjectFund, getUserContribution, getUserOneProjectFund } from '../../api/financial';

    export default {
        name: 'projectDonate',
        data() {
            return {
                fund: [{
                    blockIndex: '',

                    txId: '',

                    blockHash: '',

                    userId: '',

                    projectId: '',

                    userName: '',

                    projectName: '',

                    from: '',

                    to: '',

                    time: '',

                    money: '',

                    coinBase: false
                }]
            }
        },
        created() {
            let projectId = this.$route.query.projectId;
            let userId = this.$route.query.userId;
            console.log("传参的 projectId 为: " + projectId);
            //在新进入时先获取活动
            if (userId == undefined || userId == null || userId == '') {
                this.getOneProjectFund(projectId)
            } else {
                //如果传了userId跟projectId那么就只查该用户的
                this.getUserOneProjectFund(projectId, userId);
            }

        },
        methods: {
            async getOneProjectFund(projectId) {
                const { isSuccess, msg, data } = await getOneProjectFund({ projectId: projectId });
                if (isSuccess === true) {
                    this.fund = data;
                } else {
                    alert(msg)
                }

            },
            async getUserOneProjectFund(projectId, userId) {
                const { isSuccess, msg, data } = await getUserOneProjectFund({ projectId: projectId, userId: userId });
                if (isSuccess === true) {
                    this.fund = data;
                } else {
                    alert(msg)
                }

            },

        }
    };
</script>

<style>
</style>
