
<template>
    <div class="h-full w-full flex flex-col overflow-y-auto">
        <header class="flex text-3xl cursor-default  p-4 bg-gray-600 text-white"> OPEN API </header>

        <main class="flex-grow bg-gray-50">

        </main>
        <footer class="bg-gray-600 text-white p-4">
            所有 API 搜集自 网络，皆为前端可以直接调用的 API 接口，专为前端学习之用。
        </footer>  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useViewerStore } from './store'
import { Tab, Tabs } from 'vant';
import { useRoute, useRouter } from 'vue-router';

const store = useViewerStore()
onMounted(async () => {
    const githubDir = await fetch('./data/data.json').then((res) => res.json())
})

</script>