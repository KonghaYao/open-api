
<template>
    <div class="h-full w-full flex flex-col p-8 overflow-y-auto" v-if="store.data">
        <!--  头部信息展示 -->
        <header class="text-3xl flex mb-4">
            <a
                class="hover:text-sky-400 transition-colors"
                :href="store.data!.link"
                target="blank"
            >{{ store.data.title }}</a>
            <div class="flex-grow flex justify-end">
                <span
                    class="text-sm bg-green-400 text-white tag"
                    v-for="item in store.data.tags"
                >{{ item }}</span>
            </div>
        </header>
        <main class="flex flex-col shadow-lg p-4 shadow-gray-300 rounded-lg my-4">
            <div class="w-full text-2xl">API 指示器</div>
            <div class="flex flex-row justify-between my-4">
                <span class="text-xl flex-none bg-sky-400 text-white tag">完整 URL</span>
                <span
                    class="font-code overflow-x-auto whitespace-nowrap mx-8 flex-grow"
                >{{ store.path }}</span>
                <Icon class="bg-lime-400 text-white px-2 text-xl m-1">content_copy</Icon>
                <span
                    class="text-xl bg-green-400 text-white tag"
                >{{ (store.data!.request.methods ?? "get").toUpperCase() }}</span>
            </div>
            <div class="font-code bg-gray-50">
                <tabs v-model:active="active">
                    <tab
                        title="Path Params"
                        v-if="store.data.request.pathParams && store.data.request.pathParams.length"
                    >
                        <div class="font-normal text-xl">路径参数</div>
                        <ParamsList
                            :origin-params="store.originData!.request.pathParams!"
                            :params="store.data.request.pathParams"
                            @refresh="store.refreshPath"
                        ></ParamsList>
                    </tab>
                    <tab
                        title="Query"
                        v-if="store.data.request.params && store.data.request.params.length"
                    >
                        <div class="font-normal text-xl">请求参数</div>
                        <ParamsList
                            :origin-params="store.originData!.request.params!"
                            :params="store.data.request.params"
                            @refresh="store.refreshPath"
                        ></ParamsList>
                    </tab>
                    <tab
                        title="Header"
                        v-if="store.data!.request.headers && store.data.request.headers.length"
                    >
                        <ParamsList
                            :origin-params="store.originData!.request.headers!"
                            :params="store.data.request.headers"
                            @refresh="store.refreshPath"
                        ></ParamsList>
                    </tab>
                    <tab
                        title="Body"
                        v-if="store.data!.request.methods === 'post' && store.data.request.body && store.data.request.body.length"
                    >
                        <ParamsList
                            :origin-params="store.originData!.request.body!"
                            :params="store.data.request.body"
                            @refresh="store.refreshPath"
                        ></ParamsList>
                    </tab>
                </tabs>
            </div>
        </main>
        <nav class="shadow-lg shadow-gray-300 p-4 rounded-lg">
            <div class="text-2xl">结果展示</div>

            <div class="flex my-4">
                <span class="text-xl flex-none bg-sky-400 text-white tag">完整 URL</span>

                <span
                    class="font-code overflow-x-auto whitespace-nowrap mx-8 flex-grow"
                >{{ store.result.path }}</span>
                <button
                    class="p-2 flex-none bg-sky-400 text-white hover:brightness-95 transition-all"
                    @click="store.checkAPI"
                >重新加载</button>
            </div>

            <Result
                v-if="store.result.isReturn"
                :type="store.data.resultType"
                :data="store.result.data!"
            ></Result>
            <div v-else>没有返回</div>
        </nav>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useViewerStore } from './store'
import { Tab, Tabs } from 'vant';
import Result from './ResultViewer/index.vue'
import Icon from "@konghayao/vue-material-icons"
import ParamsList from './ParamsViewer/ParamsList.vue';
const active = ref('Params')
const store = useViewerStore()

onMounted(() => {
    store.prepareData('./data/hitokoto.ts').then(store.checkAPI)
})
</script>