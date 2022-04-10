import { Data } from "./define";

const data: Data = {
    title: "一言",
    desc: "一言",
    link: "https://developer.hitokoto.cn/sentence/#%E6%8E%A5%E5%8F%A3%E8%AF%B4%E6%98%8E",
    tags: ["CDN", "WEB"],
    request: {
        root: "https://v1.hitokoto.cn",

        pathParams: [],
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
        body: [],
        bodyType: "json",
    },
    resultType: "json",
};
export default data;
