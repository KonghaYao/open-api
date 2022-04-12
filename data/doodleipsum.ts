import { Data } from "./define";

const data: Data = {
    title: "Doodleipsum 插画",
    desc: "Doodleipsum 提供了免费的平面风格的插画图片",
    link: "https://doodleipsum.com",
    tags: ["插画", "Mock"],
    request: {
        root: "https://doodleipsum.com/:size/:type?",

        pathParams: [
            {
                key: "size",
                value: "700x400",
                desc: "生成图片的宽高，当只有一个数字时是固定宽度，x500 是固定高度",
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
                        desc: "头像风格 1",
                    },
                    {
                        value: "avatar-2",
                        desc: "头像风格 2",
                    },
                    {
                        value: "avatar-3",
                        desc: "头像风格 3",
                    },
                    {
                        value: "avatar-4",
                        desc: "头像风格 4",
                    },
                    {
                        value: "avatar-5",
                        desc: "头像风格 5",
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
                desc: "背景色，十六进制",
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
                desc: "图片的外部形状，只能是 circle",
            },
            {
                key: "sat",
                value: "0",
                optional: true,
                desc: "灰度，负数为灰色 -100 - 0",
            },
            {
                key: "blur",
                value: "0",
                optional: true,
                desc: "模糊程度 0-100",
            },
        ],
    },
    resultType: "image",
};
export default data;
