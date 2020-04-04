<!-- @author xiaodongyu -->
<!-- @email xiaodongyu@yangqianguan.com -->
<!-- @date 2020-4-4 22:34:52 -->
<!-- @desc index.vue -->

<template>
    <a-layout class="layout">
        <a-layout-sider class="sider">
            <a-menu
                :default-selected-keys="[$route.name]"
                theme="dark"
            >
                <a-menu-item
                    v-for="route in routes"
                    :key="route.name"
                >
                    <router-link :to="route">
                        {{ route.name }}
                    </router-link>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout-content class="content">
            <a-card class="card markdown-body">
                <router-view />
            </a-card>
        </a-layout-content>
    </a-layout>
</template>

<script type="text/babel">
import 'github-markdown-css';

export default {
    name: 'Blog',

    computed: {
        routes() {
            return this.$router.options.routes.find(({name}) => name === 'blog').children;
        }
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
    }

    .content {
        padding: 30px;

        .card {
            min-height: 100%;
        }
    }
}
</style>
