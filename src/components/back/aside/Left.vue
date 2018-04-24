<template>
    <div>
        <!--<el-radio-group v-model="isCollapse">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>-->
        <el-menu
                default-active="1-4-1"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                :collapse="isCollapse"
                background-color="#2b2b2b"
                text-color="#fff">
            <el-menu-item index="1" @click="toMessage">
                <i class="el-icon-location"></i>
                <span slot="title">留言中心</span>
            </el-menu-item>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">文章上传</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isCollapse: false,
            };
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            toMessage(){
                this.$router.push({path: '/back/message'});

            }
        }
    }
</script>

<style scoped lang="scss">

    div{

        .el-menu-vertical-demo:not(.el-menu--collapse) {
            width: 201px;
            min-height: 400px;
        }
    }

</style>