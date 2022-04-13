
<template>
    <div class="h-screen w-screen flex flex-col ">
        <header class="flex text-3xl cursor-default  p-4 bg-gray-600 text-white"> OPEN API </header>

        <transition-group tag="main" name="list"
            class="flex-grow flex flex-wrap overflow-y-auto transition-transform duration-500 justify-evenly">

            <!--  图片方格 -->
            <lazy-component @show="log(item.title)" v-for="(item, index) in store.allAPI" :key="item.Path"
                class="relative m-8 w-48 h-64 rounded-2xl bg-white p-4 shadow-lg shadow-gray-200 transform-gpu hover:shadow-xl hover:scale-110 hover:shadow-gray-200 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div class="z-10 h-full w-full flex flex-col">
                    <div @click="jumpTo(item.Path)" class="text-2xl cursor-pointer">{{ item.title }}</div>
                    <div class="flex-grow text-sm font-text overflow-y-auto">
                        {{ item.desc }}
                    </div>
                    <div class="flex text-xs">
                        <div class="tag" v-for="tag in item.tags">{{ tag }}</div>
                    </div>
                </div>
                <div class="absolute -z-10 h-full w-full top-0 left-0 overflow-hidden opacity-10">
                    <van-image lazy-load class="m-auto" :src="'https://doodleipsum.com/300x400/flat?n=' + index">
                    </van-image>
                </div>
            </lazy-component>

        </transition-group>
        <footer class="bg-gray-600 text-white p-4">
            所有 API 搜集自 网络，皆为前端可以直接调用的 API 接口，专为前端学习之用。
        </footer>
    </div>
</template>

<style scoped>
.list-enter-from,
.list-leave-to {
    @apply opacity-0 translate-y-12
}
</style>

<script setup lang="ts">
import { onMounted } from 'vue';
import { Image as vanImage } from 'vant'
import { APIDetail, useViewerStore } from './store'
import { useRouter } from 'vue-router';

const store = useViewerStore()
onMounted(async () => {
    store.getDataList()

})
const router = useRouter()
const jumpTo = (id: string) => {
    console.log(id);
    router.push('/api/' + id.replace(/\.ts/, ''))
}
// debugger 专用
const log = (name: string) => {
    // console.log(name);
}
</script>