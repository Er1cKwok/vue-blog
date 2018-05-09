<template>
    <el-row type="flex" justify="center">
        <el-col :xs="12" :sm="8" :md="6" :lg="4">
            <div>
                <h2>后台管理</h2>
            </div>
            <div>
                <el-input v-model="loginDialog.username" placeholder="账号"></el-input>
            </div>
            <div>
                <el-input
                        v-model="loginDialog.password"
                        type="password"
                        placeholder="密码"
                        @keyup.enter.native="login()"
                ></el-input>
            </div>
            <div>
                <el-button type="danger" @click="login()" size="large">登录</el-button>
            </div>
        </el-col>
    </el-row>
</template>

<script>
    import md5 from 'js-md5';
    import { Message } from 'element-ui';

    export default {
        data(){
            return{
                loginDialog: {
                    username: '',
                    password: ''
                }
            }
        },
        methods:{
            login(){
                let that = this;

                this.$http.post(
                    ajaxUrl+'/login',
                    {
                        username: that.loginDialog.username,
                        password: md5(that.loginDialog.password)
                    },
                    {emulateJSON: true}
                ).then(function (res) {
                    if(res.data.status === 1){
                        sessionStorage.setItem('abg',res.data.result[0].token);
                        Message({
                            message: res.data.message,
                            type: 'success'
                        });
                        that.loginDialog.username = '';
                        that.loginDialog.password = '';
                        that.$router.push('/back/article');
                    }else {
                        Message({
                            message: res.data.message,
                            type: 'error'
                        });
                        that.loginDialog.username = '';
                        that.loginDialog.password = '';
                    }

                })
            }
        }
    }
</script>

<style scoped lang="scss">

    .el-row{
        height: 100vh;
        background: rosybrown;

        .el-col{
            text-align: center;
            border: 1px solid #ccc;
            box-shadow: 10px 10px 5px #888888;
            margin-top: 12%;
            height: 30%;

            div{
                margin-top: 10px;
            }
        }

    }
    
    
</style>