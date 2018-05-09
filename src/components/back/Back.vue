<template>
    <div id="back">
        <el-row id="myHeader">
            <el-col
                    id="myTop"
                    :xs="{span:4,offset:1}"
                    class="hidden-sm-and-up">
                <top :nav="nav"></top>
            </el-col>
            <el-col
                    id="myName"
                    :lg="{span:2,offset: 22}"
                    :md="{span:3,offset: 21}"
                    :sm="{span:3,offset: 21}"
                    :xs="{span:6,offset: 18}">
                <a href="javascript:;">Eric</a>
            </el-col>
        </el-row>
        <el-row id="myContent">
            <el-col
                    id="myAside"
                    class="hidden-xs-only"
                    :sm="4"
                    :md="3"
                    :lg="3">
                <Left :nav="nav"></Left>
            </el-col>
            <el-col
                    id="myMain"
                    :sm="20"
                    :md="16"
                    :lg="14">
                <router-view></router-view>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Left from '@/components/back/aside/Left'
    import Top from '@/components/back/aside/Top'
    import ajaxUrl from '@/ajax/api'
    export default {
        components: {
            Left,
            Top
        },
        data(){
            return{
                nav: [
                    {
                        path: '/back/article',
                        text: '文章列表'
                    },
                    {
                        path: '/back/addArticle',
                        text: '新建文章'
                    },
                    {
                        path: '/back/message',
                        text: '留言中心'
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
$themeColor: #2b2b2b;

    #back{
        position: absolute;
        padding-bottom: 50px;
        width: 100%;
        height: 100%;

        #myHeader{
            top: 0;
            left: 0;
            width: 100%;
            height: 50px;
            border-bottom: 1px solid #fff;
            background: $themeColor;

            #myName{
                height: 100%;
                line-height: 50px;
                text-align: center;
                border-left: 1px solid #fff;
                a{
                    text-decoration: none;
                    color: #fff;
                }

                a:hover{
                    color: skyblue;
                }
            }
        }

        #myContent{
            height: 100%;
            width: 100%;

            #myAside{
                background: $themeColor;
                height: 100%;
            }


            #myMain{
                height: 100%;
                padding: 50px 20px 0 20px;
            }
        }
    }


    
</style>