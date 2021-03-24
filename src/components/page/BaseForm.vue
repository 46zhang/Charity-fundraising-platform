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
                    <el-form-item label="活动名称">
                        <el-input v-model="form.projectName"></el-input>
                    </el-form-item>
                    <el-form-item label="起始时间">
                        <el-col :span="11">
                            <el-date-picker
                                    type="date"
                                    placeholder="选择日期"
                                    v-model="form.projectStartTime"
                                    value-format="yyyy-MM-dd"
                                    style="width: 100%;"
                            ></el-date-picker>
                        </el-col>
                        <el-col class="line" :span="2">-</el-col>
                        <el-col :span="11">
                            <el-time-picker
                                    v-model="value1"
                                    format = 'HH:mm:ss'
                                    value-format = 'HH:mm:ss'
                                    placeholder="任意时间点">
                            </el-time-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="`结束时间">
                        <el-col :span="11">
                            <el-date-picker
                                    type="date"
                                    placeholder="选择时间"
                                    v-model="form.projectFinishTime"
                                    value-format="yyyy-MM-dd"
                                    style="width: 100%;"
                            ></el-date-picker>
                        </el-col>
                        <el-col class="line" :span="2">-</el-col>
                        <el-col :span="11">
                            <el-time-picker
                                    v-model="value2"
                                    format = 'HH:mm:ss'
                                    value-format = 'HH:mm:ss'
                                    placeholder="任意时间点">
                            </el-time-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="活动说明">
                        <el-input type="textarea" rows="5" v-model="form.projectExplain"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <Upload v-on:child-say="getUrlFromChild"></Upload>
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
    import Upload from './Upload';
    import { createActivity, updateActivity } from '../../api/activity';

    export default {
        name: 'baseform',
        components: { Upload },
        data() {
            return {
                form: {
                    projectName: '',
                    projectStartTime: '',
                    projectFinishTime: '',
                    projectExplain: '',
                    projectPhoto: ''
                },
                value1: '',
                value2: ''
            }
        },
        methods: {
            //从组件传递数据到这个父组件
            getUrlFromChild(url) {
                this.form.projectPhoto = url;
                //alert(url);
            },
            onSubmit() {
                let _this = this;
                //格式化一下时间
                _this.form.projectStartTime += " "+_this.value1;
                _this.form.projectFinishTime +=" "+ _this.value2;
                createActivity(_this.form).then(res => {
                    if (res.isSuccess) {
                        alert("创建成功");
                        //TODO  redirct to get activity List page
                        this.$router.push('/dashboard')
                    } else {
                        alert(res.msg);
                    }
                });
            }
        },

    };
</script>
