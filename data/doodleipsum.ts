import { Data } from "./define";

const data: Data = {
    title: "JSdelivr NPM 库获取",
    desc: "jsdelivr 提供了直接获取 npm 库中的代码的 API 方式",
    link: "https://baidu.com",
    tags: ["CDN", "WEB"],
    request: {
        root: "https://doodleipsum.com/:size/:type",

        pathParams: [
            {
                key: "size",
                value: "700x400",
            },
            { key: "type", value: "flat" },
        ],
        params: [
            {
                key: "i",
                value: "f0680f8b2b8802c8321a580f63ec3d40",
                optional: true,
                desc: "主体图片的 id",
            },
            {
                key: "bg",
                value: "FAFAFA",
                optional: true,
            },
            {
                key: "n",
                value: "4",
                optional: true,
                desc: "输入不同的 n 可以作为不同的图片输出",
            },
            {
                key: "shape",
                value: "circle",
                optional: true,
                desc: "输入不同的 n 可以作为不同的图片输出",
            },
        ],
        body: [],
        bodyType: "json",
    },
    resultType: "image",
};
export default data;