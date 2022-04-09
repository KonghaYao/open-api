<script setup lang="ts">

</script>

<template>
    <router-view></router-view>
</template>

<style>
@import url("./index.css");
@import url("https://cdn.jsdelivr.net/gh/KonghaYao/chinese-free-web-font-storage/build/白无常可可体-Bold/result.css");
@tailwind base;
@tailwind components;
@tailwind utilities;

#app {
    font-family: 白无常可可体, Avenir, Helvetica, Arial, sans-serif;
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
