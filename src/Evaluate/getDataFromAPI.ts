import { compile } from "path-to-regexp";
import { Data, ParamsCell, request } from "../../data/define";

export async function getDataFromAPI({ request }: Data, defineRequest: any) {
    const path = getPath(request, defineRequest);
    let body = null;
    let headers = new Headers();
    if (request.methods === "post") {
        switch (request.bodyType) {
            case "urlencoded":
                body = getURLSearchParams(transCellToObj(request.body!));
            case "form":
                body = createForm(transCellToObj(request.body)!);
            default:
                body = JSON.stringify(transCellToObj(request.body!));
                headers.set("content-type", "application/json");
        }
    }

    const result = await fetch(path, {
        method: request.methods,
        headers,
        body,
    })
        .then((res): Promise<Blob> => {
            return res.blob();
        })
        .catch(() => null);
    return [path, result] as [string, Blob | null];
}

const createForm = (obj: any) => {
    const form = new FormData();
    Object.entries(obj).forEach(([key, value]) => {
        form.append(key, value as string | Blob);
    });
    return form;
};

/** 转化 Cell 为对象 */
function transCellToObj(cell?: ParamsCell[]) {
    if (cell && cell.length) {
        return cell.reduce((col, cur) => {
            //! 修复 path-to-regexp 在使用 空字符串 报错问题
            if (cur.value === "") return col;
            if (typeof cur.value === "string") {
                col[cur.key] = cur.value;
            } else if (cur.value.length) {
                if (cur.value[0].value === "") return col;
                col[cur.key] = cur.value[0].value;
            }

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
export function getPath(request: request, defineRequest: any) {
    const [prot, path] = request.root.split(/(?<=^https?):\/\//);
    const toPath = compile(path);
    /** 写入路径参数 */
    const params = Object.assign(
        {},
        transCellToObj(request.pathParams),
        defineRequest.params
    );
    console.log(request.pathParams, params);
    let url = toPath(params);
    if (request.params && request.params.length) {
        /** 写入请求参数 */
        url +=
            "?" +
            getURLSearchParams(transCellToObj(request.params))?.toString();
    }
    return prot + "://" + url;
}
