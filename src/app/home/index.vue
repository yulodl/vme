<!-- @author xiaodongyu -->
<!-- @date 2019/12/23-23:32 -->
<!-- @desc index -->

<template>
    <div class="home">
        <router-link :to="{name: 'resume'}">
            <h3>Resume</h3>
        </router-link>
        <router-link :to="{name: 'blog'}">
            <h3>Blog</h3>
        </router-link>
    </div>
</template>

<script type="text/babel">
import HelloWorld from './component/hello-world';

export default {
    name: 'Home',
};
</script>

<style lang="scss" rel="stylesheet/scss">
.home {
    margin-top: 60px;
    text-align: center;
}
</style>
