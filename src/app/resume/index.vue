<!-- @author xiaodongyu -->
<!-- @date 2019/12/23-23:50 -->
<!-- @desc index -->

<template>
    <div class="resume markdown-body">
        <section
            class="sheet padding-5mm"
            v-html="$options.page1"
        />
    </div>
</template>

<script type="text/babel">
import page1 from './page1.md';
export default {
    name: 'Resume',

    page1,

    mounted() {
        document.body.classList.add('A4');
    },

    destroyed() {
        document.body.classList.remove('A4');
    }
};
</script>

<style lang="scss" rel="stylesheet/scss">
@import '~paper-css/paper.css';
@import '~github-markdown-css';

.resume {
    .padding-5mm {
        padding: 5mm;
    }
}
</style>
