import { Data } from "./define";

const data: Data = {
    title: "JSdelivr CDN ",
    desc: "jsdelivr 提供了直接获取 NPM 或者 Github 库中的代码的 API 方式",
    link: "https://cdn.jsdelivr.net/",
    tags: ["CDN", "WEB"],
    request: {
        root: "https://cdn.jsdelivr.net/:where/:packageName:version?/:path?",

        pathParams: [
            {
                key: "where",
                value: [
                    { value: "npm", desc: "NPM 仓库" },
                    { value: "gh", desc: "Github 仓库" },
                ],
            },
            {
                key: "packageName",
                value: "vue",
                desc: "项目的名称",
            },
            {
                key: "version",
                value: "@3.0.0",
                optional: true,
                desc: "版本号",
            },
            {
                key: "path",
                value: "package.json",
                optional: true,
                desc: "项目仓库内的特殊设置",
            },
        ],
        bodyType: "json",
    },
    resultType: "file",
};
export default data;
