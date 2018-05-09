<template>
    <div>
        <el-row>
            <el-col>
                <Header></Header>
            </el-col>
        </el-row>
        <el-row>
            <el-col :lg="{span:12,push:6}" class="hidden-sm-and-down">
                <el-carousel height="400px">
                    <el-carousel-item>
                        <img src="../../assets/images/js.png" alt="JavaScript">
                    </el-carousel-item>
                    <el-carousel-item>
                        <img src="../../assets/images/piano.jpg" alt="Piano">
                    </el-carousel-item>
                </el-carousel>
            </el-col>
            <el-col class="hidden-md-only hidden-lg-and-up">
                <el-carousel height="200px">
                    <el-carousel-item>
                        <img src="../../assets/images/js.png" alt="JavaScript">
                    </el-carousel-item>
                    <el-carousel-item>
                        <img src="../../assets/images/piano.jpg" alt="Piano">
                    </el-carousel-item>
                </el-carousel>
            </el-col>
        </el-row>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Header from '@/components/front/Header'
    export default {
        components:{
            Header
        },
        data(){
            return{
                pics: [
                    {
                        path: '../../assets/images/js.png',
                        text: 'JavaScript'
                    },
                    {
                        path: '../../assets/images/piano.jpg',
                        text: 'Piano'
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="scss">

    img{
        width: 100%;
        height: 100%;
    }
</style>