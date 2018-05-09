<template>
    <div>
        <el-row class="top">
            <el-col :lg="5">
                <el-input placeholder="请输入标题" v-model="article.title"></el-input>
            </el-col>
            <el-col :lg="{span:4,push:1}">
                <el-select v-model="article.sort" placeholder="请选择">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :lg="{span:2,push:1}">
                <el-button type="primary" @click="addSubmit();">提交</el-button>
            </el-col>
        </el-row>
        <el-row>
            <el-col :lg="12" >
            <textarea v-model="article.content"></textarea>
            </el-col>
            <el-col :lg="{span:12,push:2}">

            </el-col>
        </el-row>
    </div>

</template>

<script>

    import { Message } from 'element-ui';

    export default {

        data() {
            return {
                article: {
                    title: '',
                    content: '',
                    sort: '1',
                    author: ''
                },
                options: [
                    {
                        value: '1',
                        label: '前端'
                    },
                    {
                        value: '2',
                        label: '后端'
                    },
                    {
                        value: '3',
                        label: '生活'
                    }]
            }
        },
        methods: {
            addSubmit(){
                let that = this;
                this.$http.post(
                    ajaxUrl+'/article/add',
                    {
                        title: that.article.title,
                        author: 'EricKwok',
                        content: that.article.content,
                        sort: that.article.sort
                    },
                    {emulateJSON: true}
                ).then(function (res) {

                    if(res.data.status === 1){
                        Message({
                            message: res.data.message,
                            type: 'success'
                        });

                        that.article.title = '';
                        that.article.content = '';

                    }
                })
            }
        }
    }
</script>

<style scoped lang="scss">

    textarea{
        height: 500px;
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 5px;
        /*background: #9eb7cc;*/
        opacity: 0.8;
        overflow-y: auto;
        overflow-x: hidden;
        word-break: break-all;
    }

    textarea{
        background: #c0c0c0;
        font-size: 16px;
        resize: none;

    }

    .top{
        margin-bottom: 20px;
    }

</style>