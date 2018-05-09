<template>
    <el-row tag="ul">
        <el-col :span="6" :push="6">
            <router-link :to="{path:'/'}" tag="li">首页</router-link>
        </el-col>
        <el-col :span="6" :push="6">
            <router-link :to="{path:'/about'}" tag="li">关于我</router-link>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        data(){
            return{

            }
        }
    }
</script>

<style scoped lang="scss">

    ul{
        height: 50px;
        width: 100%;
        background: #fafafa;
        border-bottom: 1px solid #c0c0c0;

        li{
            line-height: 50px;
            cursor: pointer;
            text-align: center;
        }

        li:hover{
            color: #00ffff;
        }

    }
</style>