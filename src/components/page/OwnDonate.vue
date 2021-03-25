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
                        fixed
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
                </el-table-column>
                <el-table-column
                        prop="projectId"
                        label="所属项目"
                        sortable>
                    <template scope="scope">
                        <router-link
                                :to="{path:'/projectDonate', query: { projectId: scope.row.projectId ,userId: scope.row.userId }}">
                            {{scope.row.projectId}}
                        </router-link>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="time"
                        label="交易时间"
                        sortable>
                </el-table-column>

            </el-table>
        </template>
    </div>
</template>

<script>
    import { getAllBlock, getUserOwnContribution } from '../../api/financial';
    import { getUserId } from '../../utils/tokenUtils';

    export default {
        name: 'ownDonate',
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
            let userId = getUserId();
            // console.log(this.pageIndex - 1)
            //在新进入时先获取活动
            this.getUserOwnContribution(userId)
        },
        methods: {
            async getUserOwnContribution(userId) {
                const { isSuccess, msg, data } = await getUserOwnContribution({ userId: userId });
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
