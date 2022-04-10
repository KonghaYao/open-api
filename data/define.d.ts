export type Tags = "CDN" | "WEB";

export type OptionalValue = {
    value: string;
    desc: string;
};
export type ParamsCell = {
    /** 键值 */
    key: string;
    /** 默认测试的值 */
    value: string | OptionalValue[];
    /** input 的类型，默认为 text */
    type?: string;
    /** 是否必须填入该参数，默认为 true */
    optional?: boolean;
    /** 校验输入是否正确 */
    validate?: (self: ParamsCell) => boolean;
    /** 描述信息 */
    desc?: string;
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
    /** 传输的 body 的类型，在有 body 的时候有用 */
    bodyType: "urlencoded" | "json" | "form";
};
export interface Data {
    /** API 的标题 */
    title: string;
    /** 关于这个 API 的描述 */
    desc: string;
    /** API 的标签 */
    tags: Tags[];
    /** 导入的位置 */
    link: string;
    request: request;
    /** 返回的数据将以什么方式进行展示 */
    resultType: "text" | "file" | "image" | "json" | "music" | "video";
}
