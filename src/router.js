/*
 * @Author: xiaodongyu
 * @Date 2019-12-23 23:41:33
 * @Last Modified by: xiaodongyu
 * @Last Modified time: 2019-12-26 10:18:24
 */

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    base: process.env.BASE_URL,
    mode: 'history',
    routes: [
        {
            name: 'home',
            path: '/',
            component: () => import('./app/home')
        },
        {
            name: 'resume',
            path: '/resume',
            component: () => import('./app/resume')
        }
    ]
});

router.beforeEach((to, from, next) => {
    document.title = to.name;
    next();
});

export default router;
