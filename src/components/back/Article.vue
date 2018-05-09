<template>
    <div class="article">
        <div>
            <el-input v-model="articleTitle" placeholder="请输入标题" style="width: 200px"></el-input>
            <el-button type="primary" @click="getTable(articleTitle)">搜索</el-button>
        </div>
        <div>
            <el-table
                    v-loading="loading"
                    :data="tableData"
                    style="width: 100%"
                    height="500"
                    >
                <el-row>
                    <el-col
                            :xs="4">
                        <el-table-column label="操作" width="150">
                            <template slot-scope="scope">
                                <el-button
                                        size="mini"
                                        type="danger"
                                        @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-col>

                    <el-col
                            :xs="4">
                        <el-table-column
                                type="index"
                                prop="id">
                        </el-table-column>
                    </el-col>
                    <el-col
                            :xs="4">
                        <el-table-column
                                prop="title"
                                label="标题"
                        >
                        </el-table-column>
                    </el-col>
                    <el-col
                            :xs="4">
                        <el-table-column
                                prop="date"
                                label="日期"
                                >
                        </el-table-column>
                    </el-col>

                    <el-col
                            :xs="4">
                        <el-table-column
                                prop="author"
                                label="作者"
                        >
                        </el-table-column>
                    </el-col>
                    <el-col
                            :xs="4">
                        <el-table-column
                                prop="content"
                                label="内容"
                                show-overflow-tooltip>
                        </el-table-column>
                    </el-col>

                </el-row>
            </el-table>
        </div>
    </div>
</template>

<script>
    import { MessageBox } from 'element-ui';
    import { Message } from 'element-ui';

    export default {
        data(){
            return{
                tableData: [],
                articleTitle: '',
                loading: true
            }
        },
        mounted(){
            this.getTable();
        },
        methods:{
            handleDelete(index, row) {
                let that = this;
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    that.$http.post(
                        ajaxUrl+'/article/del',
                        {
                            title: row.title,
                            id: row.id
                        },
                        {emulateJSON: true}
                    ).then(function (res) {
                        if(res.data.status === 1){
                            Message({
                                type: 'success',
                                message: '删除成功!'
                            });
                            that.getTable();
                        }else {
                            Message({
                                type: 'info',
                                message: '已取消删除'
                            });
                        }
                    })

                }).catch(() => {
                    Message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });


            },
            getTable(title){
                let that = this;
                title = title || '';
                this.$http.get(
                    ajaxUrl+'/article',
                    {
                        params: {
                            title: title
                        }
                    }
                ).then(function (res) {

                    if(res.data.status === 1){
                        that.loading = false;
                        for(let i = 0,len = res.data.result.length; i < len; i++){
                            res.data.result[i].date = new Date(res.data.result[i].date).toLocaleString();
                        }
                        that.tableData = res.data.result;
                    }else {
                        that.loading = true;
                    }
                })
            }
        }
    }
</script>

<style scoped lang="scss">


</style>