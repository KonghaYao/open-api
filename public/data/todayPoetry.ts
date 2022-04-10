import { Data } from "./define";

const data: Data = {
    title: "今日诗词",
    desc: "",
    link: "https://www.jinrishici.com/doc/#choose",
    tags: ["CDN", "WEB"],
    request: {
        root: "https://v2.jinrishici.com/one.json",

        pathParams: [],
        params: [
            {
                key: "client",
                value: "browser-sdk/1.2",
                optional: true,
                desc: "调用的端是什么类型",
            },
            {
                key: "X-User-Token",
                value: "",
                optional: true,
                desc: "用户 Token，没有也可以使用",
            },
        ],
        body: [],
        bodyType: "json",
    },
    resultType: "json",
};
export default data;
