

<template>
    <div>{{ prettyBytes(data.size) }}</div>
    <div>{{ data.type }}</div>
</template>


<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useViewerStore } from '../store';
import prettyBytes from 'pretty-bytes';
const store = useViewerStore()
const props = defineProps<{
    data: Blob
}>()

onMounted(() => {

})
</script>