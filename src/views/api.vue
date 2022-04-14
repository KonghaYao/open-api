
<template>
    <div class=" flex flex-col   w-full " v-if="store.data">
        <main class="flex-grow  overflow-hidden rounded-2xl flex flex-col m-4 bg-white  shadow-lg shadow-gray-300">


            <header class="flex justify-between bg-gray-600 p-2">
                <div class="flex  text-sky-400 items-center button-like " @click="router.go(-1)">
                    <Icon class="p-1 text-2xl">keyboard_arrow_left</Icon>
                    <span class="text-xl">
                        返回
                    </span>
                </div>
                <div class="flex text-red-400 items-center button-like " @click="commitError">
                    <Icon>error</Icon>
                    <span>
                        汇报错误
                    </span>
                </div>
            </header>
            <header class="text-3xl flex mb-4 p-4">
                <a class="hover:text-sky-400 transition-colors" :href="store.data!.link" target="blank">{{
                    store.data.title
                }}</a>
                <div class="flex-grow flex justify-end">
                    <span class="text-sm bg-green-400 text-white tag" v-for="item in store.data.tags">{{ item }}</span>
                </div>
            </header>
            <nav class="flex flex-grow overflow-hidden px-4">
                <ParamsEditor class="w-2/3 flex-none "></ParamsEditor>
                <ReturnVue class="flex-grow border-l border-gray-400 p-2"></ReturnVue>
            </nav>
        </main>

    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useViewerStore } from './store'
import ReturnVue from './API/return.vue'
import { useRoute, useRouter } from 'vue-router';
import ParamsEditor from './API/paramsEditor.vue';
import Icon from '@konghayao/vue-material-icons';

const store = useViewerStore()
const route = useRoute()
const router = useRouter()
onMounted(() => {
    const api = route.params.api
    if (api) {
        // 直接通过 路由参数调用 api
        store.prepareData(__baseURL__ + `data/${api}.ts`)
            .catch(() =>
                router.push('/index')
            )
            .then(store.checkAPI, () => router.push('/index'))
    } else {
        router.push('/index')
    }
})
const commitError = () => window.open('https://gitee.com/dongzhongzhidong/open-api/issues')
</script>