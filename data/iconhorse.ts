import { Data } from "./define";

const data: Data = {
    title: "网站图标获取",
    desc: "获取一个网站的图标",
    link: "https://icon.horse/",
    tags: ["WEB", "Icon"],
    request: {
        root: "https://icon.horse/icon/:link",
        pathParams: [
            {
                key: "link",
                value: "bilibili.com",
                desc: "网站地址",
            },
        ],
    },
    resultType: "image",
};
export default data;
