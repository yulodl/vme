/*
 * @Author: xiaodongyu
 * @Date 2019-12-23 23:41:33
 * @Last Modified by: xiaodongyu
 * @Last Modified time: 2020-04-05 00:00:55
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
            path: '/blog',
            component: () => import('./app/blog'),
            redirect: {name: 'react'},
            children: [{
                name: 'react',
                path: 'react',
                component: () => import('./app/blog/react'),
            }, {
                name: 'js',
                path: 'js',
                component: () => import('./app/blog/js'),
            }]
        }
    ]
});

router.beforeEach((to, from, next) => {
    document.title = to.name;
    next();
});

export default router;
