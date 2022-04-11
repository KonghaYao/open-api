
<template>
    <div class="h-screen w-screen flex flex-col ">
        <header class="flex text-3xl cursor-default  p-4 bg-gray-600 text-white"> OPEN API </header>

        <main class="flex-grow bg-gray-50 flex flex-wrap ">
            <div v-for="(item, index) in store.allAPI"
                class="relative m-8 w-1/6 rounded-2xl bg-white  p-4 shadow-lg shadow-gray-200 hover:shadow-xl hover:scale-110 hover:shadow-gray-200 transition-all transform-gpu duration-500 overflow-hidden">
                <div class="z-10 h-full w-full flex flex-col">
                    <div @click="jumpTo(item.Path)" class="text-lg cursor-pointer">{{ item.title }}</div>
                    <div class="flex-grow text-sm font-text">
                        {{ item.desc }}
                    </div>
                    <div class="flex text-xs">
                        <div class="tag" v-for="tag in item.tags">{{ tag }}</div>
                    </div>
                </div>
                <div class="absolute -z-10 h-full w-full top-0 left-0 overflow-hidden opacity-30">
                    <img class="m-auto" :src="'https://doodleipsum.com/300x400/flat?n=' + index" alt="">
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