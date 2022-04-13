<script setup lang="ts">

</script>

<template>
    <router-view class="font-normal noise-bg"></router-view>
</template>

<style>
@import url("./index.css");
@import url("https://cdn.jsdelivr.net/gh/KonghaYao/chinese-free-web-font-storage/build/优设标题黑/result.css");
@import url("https://cdn.jsdelivr.net/gh/KonghaYao/chinese-free-web-font-storage/build/站酷仓耳渔阳体-W02/result.css");
@tailwind base;
@tailwind components;
@tailwind utilities;

#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
    height: 100vh;
    width: 100vw;

    overflow: hidden;
}

html,
body {
    overflow: hidden;
    border: 0;
    margin: 0;
    padding: 0;
    display: flex;
}
</style>
