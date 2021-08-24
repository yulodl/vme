/*
 * @Author: xiaodongyu
 * @Date 2019-12-23 23:41:33
 * @Last Modified by: xiaodongyu
 * @Last Modified time: 2021-08-24 22:49:21
 */

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes: [
        {
            name: 'home',
            path: '*',
            component: () => import('./app/home')
        },
        {
            name: 'resume',
            path: '/resume',
            component: () => import('./app/resume')
        },
        {
            name: 'blog',
            path: '/blog/:blog',
            component: () => import('./app/blog')
        }
    ]
});

router.beforeEach((to, from, next) => {
    document.title = to.params.blog || to.name;
    next();
});

export default router;
