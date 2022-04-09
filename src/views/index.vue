
<template>
    <div class="h-full w-full flex flex-col p-8 overflow-y-auto" v-if="store.data">
        <header class="text-lg flex p-4">
            <a
                class="hover:text-sky-400 transition-colors"
                :href="store.data!.link"
                target="blank"
            >{{ store.data.title }}</a>
            <div class="flex-grow flex justify-end">
                <tag class="cursor-pointer m-2" v-for="item in store.data.tags">{{ item }}</tag>
            </div>
        </header>
        <main class="flex flex-col">
            <div class="w-full text-xl">API 指示器</div>

            <div class="flex flex-row justify-between">
                <div>{{ store.data!.request.root }}</div>
                <Tag>{{ store.data!.request.methods ?? "get" }}</Tag>
            </div>
            <div>
                <tabs v-model:active="active">
                    <tab title="Params">
                        <Params></Params>
                        <QueryParams></QueryParams>
                    </tab>
                    <tab title="Header"></tab>
                    <tab title="Body" v-if="store.data!.request.methods === 'post'">
                        <Body></Body>
                    </tab>
                </tabs>
            </div>
        </main>
        <nav>
            <div>结果展示</div>
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
import { Tag } from 'vant'
import { useViewerStore } from './store'
import { Tab, Tabs } from 'vant';
import Params from './ParamsViewer/Params.vue';
import QueryParams from './ParamsViewer/QueryParams.vue';
import Body from './ParamsViewer/Body.vue';
import Result from './ResultViewer/index.vue'
const active = ref('Params')
const store = useViewerStore()

onMounted(() => {
    store.prepareData().then(store.checkAPI)
})
</script>