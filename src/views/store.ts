import { defineStore } from "pinia";

/** 加载 Babel */
import BabelModule from "@babel/standalone";
import "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js";
import { Eval } from "../Evaluate/eval";
import { Data } from "public/data/define";
const Babel = (window as any).Babel as typeof BabelModule;

/** 加载 worker */
import "https://unpkg.com/comlink/dist/umd/comlink.js";
import worker from "../Evaluate/index?worker";
import { getDataFromAPI } from "@/Evaluate/getDataFromAPI";
const { wrap } = (window as any).Comlink;
const api = wrap(new worker()) as typeof getDataFromAPI;

export const useViewerStore = defineStore("viewer", {
    state: () => {
        return {
            columns: [
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
                    width: "20%",
                },
            ] as const,
            data: null as null | Data,
            result: {
                isReturn: false,
                data: null as null | Blob,
                duration: 0,
                path: "",
            },
        };
    },
    actions: {
        async prepareData(url = "./data/jsdelivr.npm.ts") {
            const code = await fetch(url).then((res) => res.text());
            var output = Babel.transform(code, {
                filename: "index.ts",
                presets: [Babel.availablePresets["typescript"]],
            });
            console.log(output);
            this.data = (await Eval(output.code)).default;
        },
        async checkAPI() {
            if (this.data) {
                const startTime = new Date().getTime();
                const data = JSON.parse(JSON.stringify(this.data));
                const [path, result] = await api(data, {});
                this.result.data = result;
                this.result.path = path;
                this.result.duration = new Date().getTime() - startTime;
                this.result.isReturn = true;
            }
        },
    },
});
