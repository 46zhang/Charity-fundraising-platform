<template>


    <div id="container"></div>
    <!--    -->


</template>

<script>


    import * as G6 from '@antv/g6-pc';
    import { getOneUserProjectFundGraph, getProjectFundGraph } from '../../api/financial';

    export default {
        name: "ProjectFundGraph",
        data() {
            return {
                projectId: '',
                userId: ''
            }
        },
        created() {
            let projectId = this.$route.query.projectId;
            this.projectId = projectId;
            let userId = this.$route.query.userId;
            this.userId = userId;
            console.log("projectId: " + projectId);
            console.log("userId: " + projectId);
        },
        mounted() {
            console.log(window);
            const graph = new G6.Graph({
                    container: 'container',
                    width: 1000,
                    height: 600,
                    layout: {
                        type: 'radial',
                        // type: 'random',
                        // type: 'force',
                        // type: 'gForce',
                        linkDistance: 100,         // 可选，边长
                        preventOverlap: true, // 防止节点重叠
                        // linkDistance: 100, // 指定边距离为100

                    },
                    defaultNode: {
                        shape: "circule",
                        size: [50],
                        color: "#5B8FF9",
                        style: {
                            fill: "#9EC9FF",
                            lineWidth: 3
                        },
                        labelCfg: {
                            style: {
                                fill: "#333",
                                fontSize: 12
                            }
                        }
                    },
                    defaultEdge: {
                        type: 'line',
                        style: {
                            stroke: "#333",
                            endArrow: true
                        },
                        labelCfg: {
                            style: {
                                fill: '#333',
                                fontSize: 12,
                            },
                        }
                    },

                    fitView: true,
                    fitViewPadding: [20, 40, 50, 20],
                }
            );


            const main = async () => {
                let response;
                let userId = this.userId;
                if (userId == undefined || userId == null || userId == '') {
                    response = await getProjectFundGraph({ projectId: this.projectId });
                } else {
                    response = await getOneUserProjectFundGraph({ projectId: this.projectId, userId: this.userId });
                }
                console.log(response);
                const remoteData = await response.data;

                await console.log(remoteData);

                // ...
                graph.data(remoteData); // 加载远程数据
                graph.render(); // 渲染
            };
            main();

        }
    }


</script>

<style scoped>

</style>
