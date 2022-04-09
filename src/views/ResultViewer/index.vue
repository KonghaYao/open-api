

<template>
    <div class="flex flex-col">
        <div class="flex items-center">
            <span
                class="tag text-xl h-full bg-pink-600 text-white"
            >类型：{{ props.type.toUpperCase() }}</span>

            <div class="tag text-xl h-full bg-pink-600 text-white">耗时：{{ store.result.duration }} ms</div>
        </div>
        <div class="w-full overflow-y-auto">
            <component :is="usingComponent" :data="props.data"></component>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import { Data } from 'public/data/define';
import { Tag } from 'vant';
import { useViewerStore } from '../store';
const store = useViewerStore()

const props = defineProps<{
    data: Blob,
    type: Data['resultType']
}>()



const componentMap: { [key in Data['resultType']]: () => any } = Object.entries({
    text: () => import('./text.vue'),
    file: () => import('./file.vue'),
    json: () => import('./json.vue'),
    image: () => import('./image.vue')
}).reduce((col, [key, value]) => {
    col[key] = defineAsyncComponent(value as any)
    return col
}, {} as any)
const usingComponent = computed(() => {
    if (props.type === 'text' && props.data.type.includes('json')) {
        return componentMap['json']
    } else {
        return componentMap[props.type]
    }
})

</script>