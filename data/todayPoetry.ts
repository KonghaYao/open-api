import { Data } from "./define";

const data: Data = {
    title: "今日诗词",
    desc: "提供今天的特别诗词哦",
    link: "https://www.jinrishici.com/doc/#choose",
    tags: ["文本"],
    request: {
        root: "https://v2.jinrishici.com/one.json",
        params: [
            {
                key: "client",
                value: "browser-sdk/1.2",
                optional: true,
                desc: "调用的客户端是什么类型",
            },
            {
                key: "X-User-Token",
                value: "",
                optional: true,
                desc: "用户 Token，没有也可以使用",
            },
        ],
    },
    resultType: "json",
};
export default data;
