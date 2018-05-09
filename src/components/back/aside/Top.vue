<template>
    <div>
        <div class="logo" @click="isShow = !isShow">
            <i class="el-icon-caret-bottom"></i>
        </div>
        <ul v-if="isShow">
            <router-link
                    v-for="(value,key) in nav"
                    :key="key"
                    :to="value.path"
                    @click.native="isShow = false"
                    tag="li">
                {{value.text}}
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        props:{
            nav: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
                isShow: false
            };
        },
        created(){
            document.addEventListener('click', (e) => {
                if (!this.$el.contains(e.target)) this.isShow = false;
            })
        }
    }
</script>

<style scoped lang="scss">

    div{
        position: relative;
        top: 0;
        left: 0;

        .logo{
            width: 40px;
            border: 1px solid #fff;
            border-radius: 3px;
            height: 40px;
            text-align: center;
            position: absolute;
            top: 5px;
            left: 0;

            i{
                font-size: 40px;
                color: rosybrown;
                display: inline-block;
            }

            i:hover{
                color: skyblue;
                cursor: pointer;
            }
        }

        ul{
            width: 100px;
            border: 1px solid #fff;
            position: absolute;
            top: 55px;
            left: 0;
            text-align: center;
            border-radius: 5px;
            z-index: 999;
            background: #262626;

            li:first-of-type{
            }

            li{
                color: #E3EFFF;
                line-height: 40px;
                cursor: pointer;
                border-bottom: 1px solid #ccc;
            }

            li:hover{
                color: skyblue;
            }
        }
    }




</style>