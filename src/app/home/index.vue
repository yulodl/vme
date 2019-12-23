<!-- @author xiaodongyu -->
<!-- @date 2019/12/23-23:32 -->
<!-- @desc index -->

<template>
    <div class="home">
        <img
            alt="Vue logo"
            src="./assets/logo.png"
        >
        <hello-world msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script type="text/babel">
import HelloWorld from './component/hello-world';

export default {
    name: 'Home',

    components: {
        HelloWorld
    }
};
</script>

<style lang="scss" rel="stylesheet/scss">
.home {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
