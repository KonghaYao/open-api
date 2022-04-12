import { Data } from "./define";

const data: Data = {
    title: "一言",
    desc: "简单来说，一言指的就是一句话，可以是动漫中的台词，也可以是网络上的各种小段子。 或是感动，或是开心，有或是单纯的回忆。来到这里，留下你所喜欢的那一句句话，与大家分享，这就是一言存在的目的。",
    link: "https://developer.hitokoto.cn/sentence/",
    tags: ["文本", "Mock"],
    request: {
        root: "https://v1.hitokoto.cn",

        params: [
            {
                key: "c",
                value: [
                    {
                        value: "a",
                        desc: "动画",
                    },
                    {
                        value: "b",
                        desc: "漫画",
                    },
                    {
                        value: "c",
                        desc: "游戏",
                    },
                    {
                        value: "d",
                        desc: "文学",
                    },
                    {
                        value: "e",
                        desc: "原创",
                    },
                    {
                        value: "f",
                        desc: "来自网络",
                    },
                    {
                        value: "g",
                        desc: "其他",
                    },
                    {
                        value: "h",
                        desc: "影视",
                    },
                    {
                        value: "i",
                        desc: "诗词",
                    },
                    {
                        value: "j",
                        desc: "网易云",
                    },
                    {
                        value: "k",
                        desc: "哲学",
                    },
                    {
                        value: "l",
                        desc: "抖机灵",
                    },
                ],
                optional: true,
                desc: "句子类型",
            },
            {
                key: "min_length",
                value: "0",
                optional: true,
                desc: "返回句子的最小长度（包含）",
            },
            {
                key: "max_length",
                value: "30",
                optional: true,
                desc: "返回句子的最大长度（包含）",
            },
        ],
    },
    resultType: "json",
};
export default data;
