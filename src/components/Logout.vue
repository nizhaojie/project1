<template>
    <el-popconfirm 
        confirm-button-text='确定' 
        cancel-button-text='不用了' 
        icon="el-icon-info" icon-color="red"
        title="确定要退出吗" @confirm="logout">
        <el-button slot="reference">退出登录</el-button>
    </el-popconfirm>
</template>

<script>
export default {
    methods: {
        logout(){
            this.$router.replace('/')
        }
    }
}
</script>

<style>

</style>