
<template>
    <div class="h-screen w-screen flex flex-col ">
        <header class="flex text-3xl cursor-default  p-4 bg-gray-600 text-white"> OPEN API </header>

        <main class="flex-grow bg-gray-50 flex flex-wrap ">
            <div v-for="item in store.allAPI" class="m-8 w-48 rounded-2xl bg-white flex flex-col p-4">
                <div @click="jumpTo(item.Path)" class="text-lg cursor-pointer">{{ item.title }}</div>
                <div class="flex-grow text-sm font-text">
                    {{ item.desc }}
                </div>
                <div class="flex text-xs">
                    <div class="tag" v-for="tag in item.tags">{{ tag }}</div>
                </div>
            </div>
        </main>
        <footer class="bg-gray-600 text-white p-4">
            所有 API 搜集自 网络，皆为前端可以直接调用的 API 接口，专为前端学习之用。
        </footer>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useViewerStore } from './store'
import { Tab, Tabs } from 'vant';
import { useRoute, useRouter } from 'vue-router';

const store = useViewerStore()
onMounted(async () => {

    store.allAPI = await fetch('./data/data.json').then((res) => res.json())
})
const router = useRouter()
const jumpTo = (id: string) => {
    console.log(id);
    router.push('/api/' + id.replace(/\.ts/, ''))
}
</script>