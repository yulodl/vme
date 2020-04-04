/*
 * @Author: xiaodongyu
 * @Date 2020-04-04 22:35:34
 * @Last Modified by: xiaodongyu
 * @Last Modified time: 2020-04-04 23:13:44
 */

import {
    Layout,
    Menu,
    Card
} from 'ant-design-vue';

export default {
    install(Vue) {
        [
            Layout,
            Menu,
            Card
        ].forEach(Vue.use.bind(Vue));
    }
};
