<!-- @author xiaodongyu -->
<!-- @email xiaodongyu@yangqianguan.com -->
<!-- @date 2020-4-4 23:40:24 -->
<!-- @desc index.vue -->

<template>
    <div class="react" v-html="$options.Html" />
</template>

<script type="text/babel">
import Html from './react.md';

export default {
    name: 'React',

    Html
};
</script>
