
<template>

    <main class="flex flex-col ">
        <div class="w-full text-2xl">API 指示器</div>
        <div class="flex flex-row justify-between my-4">
            <span class="text-clip flex-none bg-sky-400 text-white tag">完整 URL</span>
            <span class="font-code overflow-x-auto whitespace-nowrap mx-8 flex-grow flex items-center">{{
                store.path
            }}</span>
            <Icon class="bg-lime-400 text-white px-2 text-xl m-1">content_copy</Icon>
            <span class="text bg-green-400 text-white tag">{{
                (store.data!.request.methods ??
                    "get").toUpperCase()
            }}</span>
        </div>
        <div class="font-code bg-gray-50 flex-grow overflow-hidden">
            <tabs v-model:active="active" class="h-full overflow-hidden">

                <!--  路径参数 -->
                <tab class="h-full overflow-auto" title="路径参数"
                    v-if="store.data.request.pathParams && store.data.request.pathParams.length">
                    <ParamsList :origin-params="store.originData!.request.pathParams!"
                        :params="store.data.request.pathParams" @refresh="store.refreshPath"></ParamsList>
                </tab>

                <!--  请求参数 -->
                <tab class="h-full overflow-auto" title="请求参数"
                    v-if="store.data.request.params && store.data.request.params.length">
                    <ParamsList :origin-params="store.originData!.request.params!" :params="store.data.request.params"
                        @refresh="store.refreshPath"></ParamsList>
                </tab>

                <!--  Headers 参数 -->
                <tab class="h-full overflow-auto" title="Header 参数"
                    v-if="store.data!.request.headers && store.data.request.headers.length">
                    <ParamsList :origin-params="store.originData!.request.headers!" :params="store.data.request.headers"
                        @refresh="store.refreshPath"></ParamsList>
                </tab>

                <!--  Body 参数 -->
                <tab class="h-full overflow-auto" title="Body 参数"
                    v-if="store.data!.request.methods === 'post' && store.data.request.body && store.data.request.body.length">
                    <ParamsList :origin-params="store.originData!.request.body!" :params="store.data.request.body"
                        @refresh="store.refreshPath"></ParamsList>
                </tab>
            </tabs>
        </div>
    </main>
</template>

<style scoped>
:deep(.van-tabs__content) {
    overflow: hidden;
    height: 100%;
}
</style>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useViewerStore } from '../store'
import { Tab, Tabs } from 'vant';
import Icon from "@konghayao/vue-material-icons"
import ParamsList from './ParamsViewer/ParamsList.vue';
const active = ref('Params')
const store = useViewerStore()

</script>