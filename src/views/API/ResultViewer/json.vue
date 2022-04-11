

<template>
    <vue-json-pretty showLength :deep="2" v-model="path" :data="json"></vue-json-pretty>
</template>

<style scoped>
:deep(.vjs-tree__indent) {
    flex: 0 0 2em;
}
</style>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';

const props = defineProps<{
    data: Blob
}>()
const json = ref({})
const path = ref('')

const refreshData = async () => {
    const text = await props.data.text()
    json.value = JSON.parse(text)
}
watch(() => props.data, refreshData)
onMounted(refreshData)
</script>