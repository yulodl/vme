<!-- @author xiaodongyu -->
<!-- @email xiaodongyu@yangqianguan.com -->
<!-- @date 2020-4-4 22:34:52 -->
<!-- @desc index.vue -->

<template>
    <a-layout class="layout">
        <a-layout-sider class="sider" theme="light" collapsible collapsed-width="80">
            <a-menu
                :default-selected-keys="[$route.params.blog]"
            >
                <a-menu-item
                    v-for="blog in Object.keys($options.BlogMap)"
                    :key="blog"
                    class="menu"
                >
                    <router-link :to="{name: 'blog', params: {blog}}">
                        {{ blog }}
                    </router-link>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout-content class="content">
            <a-card class="card markdown-body">
                <div v-html="$options.BlogMap[$route.params.blog]" />
            </a-card>
        </a-layout-content>
    </a-layout>
</template>

<script type="text/babel">
import 'github-markdown-css';

import ReactHtml from './md/react.md';
import VueHtml from './md/vue.md';
import JsHtml from './md/js.md';
import CssHtml from './md/css.md';
import NodeHtml from './md/node.md';
import BrowserHtml from './md/browser.md';
import BigNumberHtml from './md/bignumber.md';


export default {
    name: 'Blog',

    BlogMap: {
        react: ReactHtml,
        vue: VueHtml,
        js: JsHtml,
        css: CssHtml,
        node: NodeHtml,
        browser: BrowserHtml,
        bignumber: BigNumberHtml
    },

    beforeRouteUpdate(to, from, next) {
        document.title = to.params.blog;
        next();
    }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.layout {
    min-height: 100vh;

    .sider {
        position: sticky;
        top: 0;
        padding: 20px 0;
        height: 100vh;

        .ant-menu-vertical {
            border-right: none;

            .ant-menu-item {
                text-align: center;
            }
        }
    }

    .content {
        padding: 15px;

        .card {
            min-height: 100%;
        }
    }
}
</style>
