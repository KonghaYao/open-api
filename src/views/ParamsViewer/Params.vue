
<template>
    <table-lite
        class="w-full"
        is-slot-mode
        :columns="store.columns"
        :rows="store.data!.request.params"
        :total="store.data!.request.params!.length"
        isHidePaging
    >
        <template v-slot:key="data">{{ data.value.key }}</template>
        <template v-slot:optional="data">
            <checkbox :model-value="!data.value.optional"></checkbox>
        </template>

        <template v-slot:value="data">
            <input type="text" v-model="data.value.value" @input="$emit('refresh')" />
        </template>
    </table-lite>
</template>

<script setup lang="ts">
import { Checkbox } from 'vant';
import { useViewerStore } from '../store'
import TableLite from "vue3-table-lite/ts";
const store = useViewerStore()

</script>