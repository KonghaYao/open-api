
<template>
    <div class="h-full w-full flex flex-col m-8 p-4 shadow-lg shadow-gray-300 overflow-y-auto" v-if="store.data">
        <!--  头部信息展示 -->
        <header class="text-3xl flex mb-4">
            <a class="hover:text-sky-400 transition-colors" :href="store.data!.link" target="blank">{{
                store.data.title
            }}</a>
            <div class="flex-grow flex justify-end">
                <span class="text-sm bg-green-400 text-white tag" v-for="item in store.data.tags">{{ item }}</span>
            </div>
        </header>
        <nav class="grid grid-cols-3 gap-8  ">
            <ParamsEditor></ParamsEditor>
            <ReturnVue></ReturnVue>
        </nav>

    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useViewerStore } from './store'
import ReturnVue from './API/return.vue'
import { useRoute, useRouter } from 'vue-router';
import ParamsEditor from './API/paramsEditor.vue';

const store = useViewerStore()
const route = useRoute()
const router = useRouter()
onMounted(() => {
    const api = route.params.api
    if (api) {
        // 直接通过 路由参数调用 api
        store.prepareData(__baseURL__ + `data/${api}.ts`)
            .catch(() =>
                router.push('/404')
            )
            .then(store.checkAPI, () => router.push('/404'))
    } else {
        router.push('/404')
    }
})
</script>