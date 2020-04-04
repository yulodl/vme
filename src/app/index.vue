<!-- @author xiaodongyu -->
<!-- @date 2019/12/23-23:26 -->
<!-- @desc index -->

<template>
    <router-view />
</template>

<script type="text/babel">
import Vue from 'vue';

import router from 'router';
import Component from 'component';

Vue.use(Component);

export default {
    name: 'App',

    router
};
</script>
