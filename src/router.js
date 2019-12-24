/*
 * @Author: xiaodongyu
 * @Date 2019-12-23 23:41:33
 * @Last Modified by: xiaodongyu
 * @Last Modified time: 2019-12-24 21:49:10
 */

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
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
