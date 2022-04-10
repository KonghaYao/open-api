import { Data } from "./define";

const data: Data = {
    title: "QRCode",
    desc: "在线获取任何字符串的二维码",
    link: "https://api.oick.cn/qrcode/",
    tags: ["CDN", "WEB"],
    request: {
        root: "https://api.oick.cn/qrcode/api.php",

        pathParams: [],
        params: [
            {
                key: "text",
                value: "https://baidu.com",
                desc: "https 或者是 http 链接",
            },
            {
                key: "size",
                value: "64",
                optional: true,
                desc: "像素大小",
            },
        ],
        body: [],
        bodyType: "json",
    },
    resultType: "image",
};
export default data;
