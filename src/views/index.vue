

<template>
    <div></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { Eval } from '../Evaluate/eval'

/** 加载 Babel */
import BabelModule from '@babel/standalone'
import 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js'

/** 加载 worker */
import "https://unpkg.com/comlink/dist/umd/comlink.js";
import worker from '../Evaluate/index?worker'
import * as comlink from 'comlink'
const Comlink: typeof comlink = (window as any).Comlink
const api = Comlink.wrap(new worker()) as any

const Babel = (window as any).Babel as typeof BabelModule;


onMounted(async () => {
    const code = await fetch('./data/jsdelivr.npm.ts').then(res => res.text())
    var output = Babel.transform(
        code,
        {
            filename: "index.ts",
            "presets": [
                Babel.availablePresets["typescript"]
            ],
        }
    );
    console.log(output)

    const data = await Eval(output.code)
    console.log(data);
    const callback = await api(data.default, {})

})  
</script>