import { Data } from "./define";

const data: Data = {
    title: "QRCode",
    desc: "在线获取任何字符串的二维码",
    link: "https://api.oick.cn/qrcode/",
    tags: ["格式转换", "WEB"],
    request: {
        root: "https://api.oick.cn/qrcode/api.php",
        params: [
            {
                key: "text",
                value: "https://gitee.com/dongzhongzhidong",
                desc: "https 或者是 http 链接",
            },
            {
                key: "size",
                value: "128",
                optional: true,
                desc: "图片像素大小",
            },
        ],
    },
    resultType: "image",
};
export default data;
