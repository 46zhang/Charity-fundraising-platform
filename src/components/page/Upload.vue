<template>
    <div id="upload">
    <el-upload
            class="avatar-uploader"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
        <img v-if="url" :src="url" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    </div>
</template>


<style>
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 100%;
        /*height: 178px;*/
        display: block;
    }
</style>

<script>
    import { getToken } from '../../utils/tokenUtils';
    import { uploadFile } from '../../api';

    export default {
        name: 'upload',
        data() {
            return {
                url: ''
            };
        },
        methods: {
            handleAvatarSuccess(res, file) {
                this.url = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 10;
                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                let fileReader = new FileReader();
                this.url = window.URL.createObjectURL(file);
                var formdata=new FormData();// 创建form对象
                formdata.append('photo',file);// 通过append向form对象添加数据,可以通过append继续添加数据
                uploadFile(formdata).then(res=>{
                    if(!res.isSuccess){
                        alert(res.msg);
                    }else{
                        alert("上传成功");
                        //注册通知事件
                        this.$emit('child-say', res.data.url);
                    }
                });

                return false;
            }
        }
    }
</script>
