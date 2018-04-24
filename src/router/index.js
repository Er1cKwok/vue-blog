import Vue from 'vue'
import Router from 'vue-router'
import Front from '@/components/front/Front'
import Home from '@/components/front/Home'

import Back from '@/components/back/Back'
import Admin from '@/components/back/Admin'
import Message from '@/components/back/Message'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: Front,
            children: [
                {
                  path: '/',
                  component: Home
                }
            ]
        },
        {
            path: '/back',
            component: Back,
            children: [
                {
                    path: '/back',
                    component: Admin,
                    children:[
                        {
                            path: '/back/message',
                            component: Message
                        }
                    ]
                },
            ]
        }
    ]
})
