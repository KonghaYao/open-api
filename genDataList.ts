#!/usr/bin/env ts-node
import fs from "fs";
import { Data } from "./data/define";

// 读取文件夹内的文件
const files = fs.readdirSync("./data");

// 转化并执行一下数据
const promise = files
    .filter((i) => /(?<=[^\.d])\.ts$/.test(i))
    .map(async (i) => {
        return import("./data/" + i).then((res) =>
            Object.assign(res.default, { Path: i })
        );
    });

// 等候执行完成后保存数据
Promise.all(promise).then((res: (Data & { Path: string })[]) => {
    const allData = res.map(({ title, desc, link, tags, Path }) => ({
        title,
        desc,
        link,
        tags,
        Path,
    }));
    fs.writeFileSync("./data/data.json", JSON.stringify(allData));
});
