/** 直接执行给的文字代码，代码必须为 esm 导出 */
export const Eval = (code: string) => {
    const script = URL.createObjectURL(
        new File([code], "index.js", { type: "application/javascript" })
    );
    return import(/* @vite-ignore */ script);
};
