import Vue from 'vue'
import VueRouter from 'vue-router'

import Homepage from '@/views/Homepage' //主页
import Login from "@/views/Login" //登陆注册界面


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Login',
    component: Login
},
{
    path: '/Home',
    name: 'Home',
    component: Homepage
},
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


export default router
