<template>
    <ul>
        <router-link
                v-for="(value,key) in nav"
                :key="key"
                :to="value.path"
                @click.native="isShow = false"
                tag="li">
            {{value.text}}
        </router-link>
    </ul>
</template>

<script>
    export default {
        props:{
            nav: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style scoped lang="scss">
    ul{
        width: 100%;
        height: 100%;

        li{
            line-height: 40px;
            text-align: center;
            border-bottom: 1px solid #fff;
            color: white;
        }

        li:hover{
            opacity: 0.5;
            cursor: pointer;
            color: #00ffff;
        }
    }
</style>