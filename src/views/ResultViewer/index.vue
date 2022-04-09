

<template>
    <div>
        <Tag>{{ props.type }}</Tag>
        <div class="w-full overflow-y-auto">
            <component :is="usingComponent" :data="props.data"></component>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import { Data } from 'public/data/define';
import { Tag } from 'vant';


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