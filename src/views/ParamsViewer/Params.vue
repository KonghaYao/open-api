
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
        <template v-slot:must="data">
            <input type="checkbox" v-model="data.value.must" disabled />
        </template>

        <template v-slot:value="data">
            <input type="text" v-model="data.value.value" />
        </template>
    </table-lite>
</template>

<script setup lang="ts">
import { useViewerStore } from '../store'
import TableLite from "vue3-table-lite/ts";
const store = useViewerStore()

</script>