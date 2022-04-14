
<template>
    <table-lite class="w-full" is-slot-mode :columns="columns" :rows="originParams" :total="originParams!.length"
        isHidePaging>
        <template v-slot:key="data">{{ data.value.key }}</template>
        <template v-slot:optional="data">
            <checkbox :model-value="!data.value.optional"></checkbox>
        </template>

        <template v-slot:value="data">
            <input type="text" v-if="typeof data.value.value === 'string'" :value="getRef(data.value).value"
                @input="changeData($event, data.value)" />
            <select v-else @change="changeData($event, data.value)">
                <option :value="val.value" v-for="val in data.value.value">{{ val.value }} {{ val.desc }}</option>
            </select>
        </template>
    </table-lite>
</template>

<script setup lang="ts">
import { ParamsCell } from '../../../../data/define';
import { Checkbox } from 'vant';
import TableLite from "vue3-table-lite/ts";

const props = defineProps<{
    params: ParamsCell[]
    originParams: ParamsCell[]
}>()
const $emit = defineEmits<{
    (event: 'refresh'): void
}>()

const changeData = (e: Event, data: ParamsCell) => {
    const value = (e.target as HTMLInputElement).value
    changeValue(data, value)
    $emit('refresh')

}
const getRef = (data: ParamsCell) => {
    const ref = props.params.find(i => i.key === data.key)!

    return ref
}
const changeValue = (data: ParamsCell, value: string) => {
    const target = props.params.find(i => i.key === data.key)!
    target.value = value
}
const columns = [
    {
        label: "必填",
        field: "optional",
        width: "6%",
    },
    {
        label: "变量名",
        field: "key",
        width: "20%",
    },
    {
        label: "测试参数",
        field: "value",
        width: "20%",
    },
    {
        label: "描述",
        field: "desc",
        width: "",
    },
] 
</script>