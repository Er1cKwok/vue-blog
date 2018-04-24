<template>
    <div>
        <div class="myHeader">
            <div class="myHeader_login">
                <a href="">登录</a>
            </div>
        </div>
        <div class="myContent">
            <div class="myAside">
                <Left></Left>
            </div>
            <div class="myMain">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import Left from '@/components/back/aside/Left'
    import Top from '@/components/back/aside/Top'
    export default {
        components: {
            Left,
            Top
        }
    }
</script>

<style scoped lang="scss">
$themeColor: #2b2b2b;

    .myHeader{
        background: $themeColor;
        width: 100%;
        height: 50px;

        .myHeader_login{
            width: 10%;
            height: 100%;
            float: right;
            line-height: 50px;
            text-align: center;
            border-left: 1px solid #fff;
            a{
                text-decoration: none;
                color: #fff;
            }
        }
    }

    .myContent{
        height: 100%;
        width: 100%;

        .myAside{
            width: 200px;
            height: 100%;
            position: absolute;
            background: $themeColor;
            float: left;
        }

        .myMain{
            float: left;
            margin-left: 200px;
        }
    }
    
</style>