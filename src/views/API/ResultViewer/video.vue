

<template>
    <video class="w-1/2 m-auto border border-gray-300" ref="image" :src="store.result.path" />
</template>


<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useViewerStore } from '../../store';
const store = useViewerStore()
const props = defineProps<{
    data: Blob
}>()
const image = ref<HTMLImageElement>()
const size = ref([0, 0])
const loadWH = () => {
    const { naturalHeight, naturalWidth } = image.value!
    size.value = [naturalWidth, naturalHeight]
}
onMounted(() => {
    loadWH()
    image.value!.onload = () => {
        loadWH()
    }
})
</script>