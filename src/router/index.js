import Vue from 'vue'
import Router from 'vue-router'

import Front from '@/components/front/Front'
import Blog from '@/components/front/Blog'
import About from '@/components/front/About'

import Back from '@/components/back/Back'
import Login from '@/components/back/Login'
import Message from '@/components/back/Message'
import Article from '@/components/back/Article'
import addArticle from '@/components/back/addArticle'

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/',
            component: Front,
            children: [
                {
                    path: '/',
                    component: Blog
                },
                {
                    path: '/about',
                    component: About
                }
            ]
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/back',
            meta: {
                loginStatus: true
            },
            component: Back,
            children:[
                {
                    path: '/back/message',
                    meta: {
                        loginStatus: true
                    },
                    component: Message
                },
                {
                    path: '/back/article',
                    meta: {
                        loginStatus: true
                    },
                    component: Article
                },
                {
                    path: '/back/addArticle',
                    meta: {
                        loginStatus: true
                    },
                    component: addArticle
                }
            ]


        }
    ]
});


//路由拦截
router.beforeEach((to, from, next) => {
    if (to.meta.loginStatus) {  // 判断该路由是否需要登录权限
        if (sessionStorage.getItem('abg')) {
            next();
        }
        else {
            next({
                path: '/login'
            })
        }
    }
    else {
        next();
    }
});

export default router;