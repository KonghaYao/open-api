
<template>

    <nav class="flex flex-col">
        <div class="text-2xl">结果展示</div>
        <div class="flex my-4">

            <button class="p-2 flex-none bg-sky-400 text-white hover:brightness-95 transition-all"
                @click="store.checkAPI">重新加载</button>
        </div>
        <div v-if="store.result.isReturn" class="overflow-hidden flex-grow">
            <Result :type="store.data.resultType" :data="store.result.data!"></Result>
        </div>
        <div v-else>没有返回</div>
    </nav>

</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useViewerStore } from '../store'
import { Tab, Tabs } from 'vant';
import Result from './ResultViewer/index.vue'
import Icon from "@konghayao/vue-material-icons"
import ParamsList from './ParamsViewer/ParamsList.vue';
import { useRoute, useRouter } from 'vue-router';

const store = useViewerStore()

</script>