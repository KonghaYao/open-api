import { compile } from "path-to-regexp";
import { Data, ParamsCell, request } from "../../public/data/define";

export async function getDataFromAPI(
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
}
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
    const [prot, path] = request.root.split(/(?<=^https?):\/\//);
    const toPath = compile(path);
    /** 写入路径参数 */
    const params = Object.assign(
        {},
        transCellToObj(request.pathParams),
        defineRequest.params
    );
    let url = toPath(params);
    if (request.params && request.params.length) {
        /** 写入请求参数 */
        url +=
            "?" +
            getURLSearchParams(transCellToObj(request.params))?.toString();
    }
    return prot + "://" + url;
}
