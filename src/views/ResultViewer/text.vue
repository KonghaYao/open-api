

<template>
    <pre>{{ text }}</pre>
</template>

<script setup lang="ts">import { onMounted, ref } from 'vue';


const props = defineProps<{
    data: Blob
}>()
const text = ref('')
onMounted(async () => {
    text.value = await props.data.text()
})
</script>