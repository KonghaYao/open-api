import { Data } from "./define";

const data: Data = {
    title: "噪声背景图",
    desc: "一种噪声算法自动生成的算法图",
    link: "https://php-noise.com/",
    tags: ["WEB", "背景图"],
    request: {
        root: "https://php-noise.com/noise.php",
        params: [
            {
                key: "mode",
                value: [
                    { value: "brightness", desc: "鲜艳颜色" },
                    { value: "around", desc: "更多颜色混合" },
                ],
            },
            {
                key: "multi",
                value: "1.5",
                desc: "brightness 独有的调整,最小值 为 0.1",
                optional: true,
            },
            {
                key: "step",
                value: "5",
                desc: "brightness 独有的调整,1-50",
                optional: true,
            },
            {
                key: "hex",
                value: "FF0000",
                optional: true,
                desc: "Hex 值，不需要 #",
            },
            {
                key: "tiles",
                value: "20",
                optional: true,
                desc: "瓦片的数目 1-50",
            },
            {
                key: "tileSize",
                value: "20",
                optional: true,
                desc: "瓦片的大小 1-20px",
            },
            {
                key: "borderWidth",
                value: "0",
                optional: true,
                desc: "瓦片的大小 1-20px",
            },

            {
                key: "r",
                value: "",
                optional: true,
                desc: "R 值",
            },
            {
                key: "g",
                value: "",
                optional: true,
                desc: "G 值",
            },
            {
                key: "r",
                value: "",
                optional: true,
                desc: "B 值",
            },
        ],
    },
    resultType: "image",
};
export default data;
