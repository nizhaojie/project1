<template>
    <div>
        <el-upload ref="upload" :auto-upload="false" class="avatar-uploader" action="#" :http-request="uploadAvatar"
            :show-file-list="false" :on-change="avatarPreview">
            <el-avatar v-if="imageUrl" :src="imageUrl" class="avatar"  />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
    </div>


</template>

<script>
export default {
    data() {
        return {
            imageUrl: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
            file: ''
        }
    },
    methods: {
        avatarPreview(file) {
            //这里是实现图片的预览
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        uploadAvatar(data) {
            //这里的data.file就是我们要上传到后台的图片文件
            this.file = data.file
        },
        async add() {
            //调用upload组件的自带的submit方法，从submit回调函数里面我们可以获取到需要上传的图片信息
            this.$refs.upload.submit();
            const formData = new FormData();
            formData.append('file', this.file);
            const { data: res } = await this.$ajax.post("/api/manager/add", formData);
        },
    }

}
</script>

<style scoped>
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
    width: 50px;
    height: 50px;
    display: block;
}
</style>