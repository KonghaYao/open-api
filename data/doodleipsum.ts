import { Data } from "./define";

const data: Data = {
    title: "Doodleipsum 插画",
    desc: "Doodleipsum 提供了免费的平面风格的插画图片",
    link: "https://baidu.com",
    tags: ["CDN", "WEB"],
    request: {
        root: "https://doodleipsum.com/:size/:type?",

        pathParams: [
            {
                key: "size",
                value: "700x400",
            },
            {
                key: "type",
                value: [
                    {
                        value: "",
                        desc: "随机风格",
                    },
                    {
                        value: "flat",
                        desc: "平面风格",
                    },
                    {
                        value: "hand-drawn",
                        desc: "手绘风格",
                    },
                    {
                        value: "outline",
                        desc: "边线风格",
                    },
                    {
                        value: "abstract",
                        desc: "抽象风格",
                    },
                    {
                        value: "avatar",
                        desc: "",
                    },
                    {
                        value: "avatar-2",
                        desc: "",
                    },
                    {
                        value: "avatar-3",
                        desc: "",
                    },
                    {
                        value: "avatar-4",
                        desc: "",
                    },
                    {
                        value: "avatar-5",
                        desc: "",
                    },
                ],
                optional: true,
            },
        ],
        params: [
            {
                key: "i",
                value: "f0680f8b2b8802c8321a580f63ec3d40",
                optional: true,
                desc: "主体图片的 id,不填为随机生成",
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
