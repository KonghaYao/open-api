import "https://unpkg.com/comlink/dist/umd/comlink.js";
import { compile } from "path-to-regexp";
import { Data, ParamsCell, request } from "../../public/data/define";
(globalThis as any).Comlink.expose(async function evaluate(
    { request, resultType }: Data,
    defineRequest: any
) {
    const path = getPath(request, defineRequest);
    let body = null;
    if (request.methods === "post") {
        switch (request.bodyType) {
            case "urlencoded":
                body = getURLSearchParams(transCellToObj(request.body!));
            case "form":
            case "json":
                body = JSON.stringify(transCellToObj(request.body!));
        }
    }

    const result = await fetch(path, {
        method: request.methods,
        body,
    }).then((res): Promise<Blob | string> => {
        if (resultType === "text" || resultType === "json") {
            return res.text();
        } else {
            return res.blob();
        }
    });
    return result;
});

/** 转化 Cell 为对象 */
function transCellToObj(cell?: ParamsCell[]) {
    if (cell && cell.length) {
        return cell.reduce((col, cur) => {
            col[cur.key] = cur.must !== false ? cur.value : undefined;

            return col;
        }, {} as any);
    } else {
        return null;
    }
}

/** 转对象为 URLSearchParams */
function getURLSearchParams(obj: Object) {
    if (obj) {
        const param = new URLSearchParams();
        Object.entries(obj).forEach(([key, value]) => {
            param.set(key, value);
        });
        return param;
    } else {
        return;
    }
}
/** 转化对象为路径 */
function getPath(request: request, defineRequest: any) {
    const toPath = compile(request.root);
    /** 写入路径参数 */
    const params = Object.assign(
        {},
        transCellToObj(request.pathParams),
        defineRequest
    );
    console.log(params);
    let url = toPath(params);

    if (request.params && request.params.length) {
        /** 写入请求参数 */
        url +=
            "&" +
            getURLSearchParams(transCellToObj(request.params))?.toString();
    }
    console.log(url);
    return "https://" + url;
}
