/*
 * @Author: xiaodongyu
 * @Date 2019-12-23 23:41:33
 * @Last Modified by: xiaodongyu
 * @Last Modified time: 2019-12-24 00:30:05
 */

import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './app/home';
import Resume from './app/resume';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'home',
            path: '/',
            component: Home,
        },
        {
            name: 'resume',
            path: '/resume',
            component: Resume
        }
    ]
});

router.beforeEach((from, to, next) => {
    document.title = to.name;
    next();
});

export default router;
