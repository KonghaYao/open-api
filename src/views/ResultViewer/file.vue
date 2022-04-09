

<template>
    <div class="flex flex-col w-fit m-auto">
        <Icon class="text-3xl text-cyan-500">insert_drive_file</Icon>
        <div>{{ filename }}</div>
        <div>{{ prettyBytes(data.size) }}</div>
        <div>{{ data.type }}</div>
    </div>
</template>


<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useViewerStore } from '../store';
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