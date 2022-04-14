import { Data } from "./define";
const token = "akzHiYYUO5FhFLFJsgKA6OqXeEKCY0Tb6C8psUl3";
const params = [
    {
        key: "query",
        value: "",
        optional: true,
        desc: "多个搜索使用空格或者±号进行操作，不填会返回所有信息",
    },
    {
        key: "page",
        value: "1",
        optional: true,
        desc: "页码标记",
    },
    {
        key: "page_size",
        value: "15",
        optional: true,
        desc: "每一页个数，最大 150",
    },
    {
        key: "field",
        value: "",
        optional: true,
        desc: "用于筛选返回结果所拥有的字段",
        link: "https://freesound.org/docs/api/resources_apiv2.html#sound-instance-response",
    },
    {
        key: "filter",
        value: "",
        optional: true,
        desc: "用于筛选返回结果",
        link: "https://freesound.org/docs/api/resources_apiv2.html#text-search",
    },
    {
        key: "sort",
        value: [
            {
                value: "score",
                desc: "根据搜索引擎返回的相关分数排序(默认)。",
            },
            {
                value: "duration_desc",
                desc: "长时间优先",
            },
            {
                value: "duration_asc",
                desc: "短时间优先",
            },
            {
                value: "created_desc",
                desc: "新创建者优先",
            },
            {
                value: "created_asc",
                desc: "旧创建者优先",
            },
            {
                value: "downloads_desc",
                desc: "多下载量优先",
            },
            {
                value: "downloads_asc",
                desc: "少下载量优先",
            },
            {
                value: "rating_desc",
                desc: "高评分优先",
            },
            {
                value: "rating_asc",
                desc: "低评分优先",
            },
        ],
        optional: true,
        desc: "用于排序查询结果",
    },

    {
        key: "group_by_pack",
        value: [
            { value: "0", desc: "默认" },
            { value: "1", desc: "默认" },
        ],
        optional: true,
        desc: "是否折叠同一 pack 的结果",
    },
    {
        key: "format",
        value: [
            { value: "json", desc: "" },
            { value: "xml", desc: "" },
            { value: "yaml", desc: "" },
        ],
        desc: "是否折叠同一 pack 的结果",
    },
];

const data: Data = {
    title: "无版权音效搜索",
    desc: "FreeSound 提供的无版权音效 API",
    link: "https://freesound.org/docs/api/overview.html",
    tags: ["音效", "Mock"],
    request: {
        root: "https://freesound.org/apiv2/search/:type/",
        headers: [
            {
                key: "Authorization",
                value: "Token akzHiYYUO5FhFLFJsgKA6OqXeEKCY0Tb6C8psUl3",
                desc: "账号获取的一个 Token （测试 token 请勿滥用）",
            },
        ],
        pathParams: [
            {
                key: "type",
                value: [
                    { value: "text", desc: "文本信息检索" },
                    { value: "content", desc: "描述信息检索" },
                    { value: "combined", desc: "混合信息检索" },
                ],
            },
        ],
        params,
    },
    resultType: "json",
};
export default data;
