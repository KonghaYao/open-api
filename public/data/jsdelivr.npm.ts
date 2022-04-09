import { Data } from "./define";

const data: Data = {
    title: "JSdelivr NPM 库获取",
    desc: "jsdelivr 提供了直接获取 npm 库中的代码的 API 方式",
    link: "https://baidu.com",
    tags: ["CDN", "WEB"],
    request: {
        root: "https://cdn.jsdelivr.net/:where/:packageName:version/:path?",

        pathParams: [
            {
                key: "where",
                value: "npm",
            },
            {
                key: "packageName",
                value: "vue",
            },
            {
                key: "version",
                value: "@3.0.0",
            },
            {
                key: "path",
                value: "package.json",
                must: false,
            },
        ],
        params: [{ key: "data", value: "1232" }],
        body: [],
        bodyType: "json",
    },
    resultType: "file",
};
export default data;
