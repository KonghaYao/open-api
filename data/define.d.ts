export type Tags =
    | "CDN"
    | "WEB"
    | "Mock"
    | "插画"
    | "风景画"
    | "背景图"
    | "文本"
    | "格式转换"
    | "Icon"
    | "音效";

export type OptionalValue = {
    value: string;
    desc: string;
};
export type ParamsCell = {
    /** 键值 */
    key: string;
    /** 默认测试的值，当 OptionalValue 时是枚举字符串 */
    value: string | OptionalValue[];
    /** input 的类型，默认为 text */
    type?: string;
    /** 是否必须填入该参数，默认为 true */
    optional?: boolean;
    /** 校验输入是否正确，开发中 */
    validate?: (self: ParamsCell) => boolean;
    /** 描述信息 */
    desc?: string;
    /**描述的链接信息 */
    link?: string;
};
export type request = {
    /** API 的根路径 */
    root: string;
    /** 请求方式，默认为 get */
    methods?: "get" | "post";
    headers?: ParamsCell[];
    /** 路径参数 */
    pathParams?: ParamsCell[];
    /** root 的参数 */
    params?: ParamsCell[];
    /** post 传输的数据 */
    body?: ParamsCell[];
    /** 传输的 body 的类型，在 POST 的时候有用 */
    bodyType?: "urlencoded" | "json" | "form";
};
export interface Data {
    /** API 的标题 */
    title: string;
    /** 关于这个 API 的描述 */
    desc: string;
    /** API 的标签，只允许为类型限制的 tag */
    tags: Tags[];
    /** 引导链接，标识你的 API 的出处 */
    link: string;
    request: request;
    /** 返回的数据将以什么方式进行展示 */
    resultType: "text" | "file" | "image" | "json" | "music" | "video";
}
