
<template>
    <div class="h-full w-full flex flex-col p-8" v-if="store.data">
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
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Tag } from 'vant'
import { useViewerStore } from './store'
import TableLite from "vue3-table-lite/ts";
import { Tab, Tabs } from 'vant';
import Params from './Params.vue';
import QueryParams from './QueryParams.vue';
import Body from './Body.vue';
const active = ref('Params')
const store = useViewerStore()



onMounted(() => {
    store.prepareData()

})
</script>