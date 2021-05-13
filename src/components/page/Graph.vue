<template>


    <div id="container"></div>
    <!--    -->


</template>

<script>


    import * as G6 from '@antv/g6-pc';
    import { getProjectFundGraph } from '../../api/financial';

    export default {
        name: "Graph",
        data() {
            return {
                projectId: ''
            }
        },
        created() {
            let projectId = this.$route.query.projectId;
            console.log("projectId: " + projectId);
        },
        mounted() {
            console.log(window);
            const graph = new G6.Graph({
                    container: 'container',
                    width: 1000,
                    height: 600,
                    layout: {
                        type: 'radial', // 指定为力导向布局
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
                const response = await getProjectFundGraph({ projectId: this.projectId });
                console.log(response);
                const remoteData = await response.data;

                await console.log(response);

                // ...
                graph.data(remoteData); // 加载远程数据
                graph.render(); // 渲染
            };
            main();

            // const data = {
            //         nodes: [
            //             { id: '1', x: 50, y: 50, size: 20 },
            //             { id: '2', x: 150, y: 50, size: 20 },
            //             { id: '3', x: 200, y: 50, size: 20 },
            //             { id: '4', x: 300, y: 130, size: 20 },
            //             { id: '5', x: 350, y: 50, size: 20 },
            //             { id: '6', x: 450, y: 50, size: 20 },
            //             { id: '7', x: 500, y: 50, size: 20 },
            //             { id: '8', x: 600, y: 50, size: 20 },
            //             { id: '9', x: 650, y: 50, size: 20 },
            //             { id: '10', x: 750, y: 50, size: 20 },
            //             { id: '11', x: 800, y: 50, size: 20 },
            //             { id: '12', x: 900, y: 150, size: 20 },
            //             { id: '13', x: 950, y: 50, size: 20 },
            //             { id: '14', x: 1050, y: 150, size: 20 },
            //             { id: '15', x: 1100, y: 50, size: 20 },
            //         ],
            //         edges: [
            //             { source: '1', target: '1', type: 'line', label: 'line' },
            //             { source: '3', target: '3', type: 'polyline', label: 'polyline' },
            //             { source: '5', target: '5', type: 'arc', label: 'arc' },
            //             { source: '7', target: '8', type: 'quadratic', label: 'quadratic' },
            //             { source: '9', target: '10', type: 'cubic', label: 'cubic' },
            //             { source: '11', target: '12', type: 'cubic-vertical', label: 'cubic-vertical' },
            //             { source: '13', target: '14', type: 'cubic-horizontal', label: 'cubic-horizontal' },
            //             { source: '15', target: '15', type: 'loop', label: 'loop' },
            //         ],
            // };
            //
            // const graph = new G6.Graph({
            //     container: "container",
            //     width: 1000,
            //     height: 600,
            //     layout: {
            //         type: 'gForce',
            //         center: [200, 200],     // 可选，默认为图的中心
            //         linkDistance: 50,         // 可选，边长
            //         nodeStrength: 30,         // 可选
            //         edgeStrength: 0.1,        // 可选
            //         nodeSize: 30,             // 可选
            //         preventOverlap:true,
            //         onTick: () => {           // 可选
            //             console.log('ticking');
            //         },
            //         onLayoutEnd: () => {      // 可选
            //             console.log('force layout done');
            //         },
            //     },
            //     defaultNode: {
            //         shape: "circule",
            //         size: [100],
            //         color: "#5B8FF9",
            //         style: {
            //             fill: "#9EC9FF",
            //             lineWidth: 3
            //         },
            //         labelCfg: {
            //             style: {
            //                 fill: "#fff",
            //                 fontSize: 20
            //             }
            //         }
            //     },
            //     defaultEdge: {
            //         type: 'line',
            //         style: {
            //             stroke: "#333",
            //             endArrow:true
            //         }
            //     }
            // });
            //
            // graph.data(data);
            // graph.render();
        }
    }


</script>

<style scoped>

</style>
