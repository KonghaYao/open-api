

<template>
    <div class="flex flex-col w-fit m-auto p-4">
        <div class="m-auto ">

            <Icon class="text-3xl p-4 rounded-full  bg-cyan-500 text-white">insert_drive_file</Icon>
        </div>
        <div class="text-2xl">
            <div class="text-3xl">
                文件信息
            </div>
            <div>名称：{{ filename }}</div>
            <div>大小：{{ prettyBytes(data.size) }}</div>
            <div>类型：{{ data.type }}</div>
        </div>
    </div>
</template>


<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useViewerStore } from '../../store';
import prettyBytes from 'pretty-bytes';
import Icon from '@konghayao/vue-material-icons';
import { getFilenameFromPath } from './filename'
const store = useViewerStore()
const props = defineProps<{
    data: Blob
}>()
const filename = computed(() => getFilenameFromPath(store.result.path))
onMounted(() => {
    console.log();
})  
</script>