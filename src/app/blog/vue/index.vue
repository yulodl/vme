<!-- @author xiaodongyu -->
<!-- @email xiaodongyu@yangqianguan.com -->
<!-- @date 2020-4-5 21:51:57 -->
<!-- @desc index.vue -->

<template>
    <div class="vue" v-html="$options.Html" />
</template>

<script type="text/babel">
import Html from './vue.md';

export default {
    name: 'Vue',

    Html
};
</script>
