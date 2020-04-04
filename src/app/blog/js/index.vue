<!-- @author xiaodongyu -->
<!-- @email xiaodongyu@yangqianguan.com -->
<!-- @date 2020-4-5 00:01:16 -->
<!-- @desc index.vue -->

<template>
    <div class="js" v-html="$options.Html" />
</template>

<script type="text/babel">
import Html from './js.md';

export default {
    name: 'js',

    Html
};
</script>
