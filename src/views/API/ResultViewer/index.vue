

<template>
    <div class="flex flex-col  h-full">
        <div class="flex items-center select-none">
            <span class="tag  bg-orange-600 text-white">类型：{{ props.type.toUpperCase() }}</span>

            <div class="tag  bg-pink-600 text-white">耗时：{{ store.result.duration }} ms</div>

            <div class="button-like tag  cursor-pointer bg-purple-600 text-white flex" @click="download">
                <Icon>download</Icon>下载
            </div>
        </div>
        <div class="w-full overflow-y-auto flex-grow">
            <component :is="usingComponent" :data="props.data"></component>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import { Data } from "../../../../data/define";
import Icon from '@konghayao/vue-material-icons';
import { useViewerStore } from '../../store';
import { saveAs } from 'file-saver'
import mime2ext from 'mime2ext'
import { getFilenameFromPath } from './filename'
const store = useViewerStore()

const props = defineProps<{
    data: Blob,
    type: Data['resultType']
}>()

const download = () => {
    const name = getFilenameFromPath(store.result.path)
    if (props.data) {
        saveAs(props.data, name || new Date().getTime() + '.' + mime2ext(props.data.type))
    } else {
        saveAs(store.result.path, name || new Date().getTime() + '.jpg')
    }
}

/**动态加载组件 */
const componentMap: { [key in Data['resultType']]: () => any } = Object.entries({
    text: () => import('./text.vue'),
    file: () => import('./file.vue'),
    json: () => import('./json.vue'),
    image: () => import('./image.vue'),
    music: () => import('./music.vue'),
    video: () => import('./video.vue')
}).reduce((col, [key, value]) => {
    col[key] = defineAsyncComponent(value as any)
    return col
}, {} as any)


const usingComponent = computed(() => {
    if (props.type === 'text' && props.data.type.includes('json')) {
        // 强制使用 json 渲染
        return componentMap['json']
    } else {
        return componentMap[props.type]
    }
})

</script>