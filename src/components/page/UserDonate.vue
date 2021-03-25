<template>
    <div class="block">
        <el-timeline>
            <div v-for="(item,index) in fund">
                <el-timeline-item placement="top"
                                  :key="index"
                                  :icon="'el-icon-user'"
                                  :type="'success'"
                                  :size="'large'"
                                  :timestamp="item.time"
                >
                    <el-card v-if="!item.coinBase" color="red">
                        <h3>项目名称: {{item.projectName}}</h3>
                        <span></span>
                        <p>用户 {{item.userName}}</p>
                        <p>金额 {{item.money}}</p>
                        <p>付钱节点 {{item.from}}</p>
                        <p>收钱节点 {{item.to}}</p>
                    </el-card>

                    <el-card v-if="item.coinBase" color="green">
                        <h3>项目名称: {{item.projectName}}</h3>
                        <el-divider></el-divider>
                        <p>用户: {{item.userName}}</p>
                        <p>金额: {{item.money}}</p>
                        <p>付钱节点: {{item.from}}</p>
                        <p>收钱节点:{{item.to}}</p>
                    </el-card>
                </el-timeline-item>

            </div>
        </el-timeline>
    </div>
</template>

<script>
    import { getAllBlock, getUserContribution } from '../../api/financial';

    export default {
        name: 'userDonate',
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
            let userId = this.$route.query.userId;
            //console.log("传参的userId为: " + userId);
            //在新进入时先获取活动
            this.getUserContribution(userId)
        },
        methods: {
            async getUserContribution(userId) {
                const { isSuccess, msg, data } = await getUserContribution({ userId: userId });
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
