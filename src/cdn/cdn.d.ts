// 配置 cdn 直接链接
declare module "https://cdn.skypack.dev/*" {
    const a: any;
    export default a;
}
declare module "https://cdn.jsdelivr.net/*" {
    const a: any;
    export default a;
}
