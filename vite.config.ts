import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import styleImport, { VantResolve } from "vite-plugin-style-import";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vitejs.dev/config/
export default ({ mode }) => {
    console.log(mode);
    return defineConfig({
        define: {
            //! 构建模式下使用 CDN
            __baseURL__:
                mode === "production"
                    ? JSON.stringify(
                          "https://cdn.jsdelivr.net/gh/KonghaYao/open-api/"
                      )
                    : JSON.stringify("./"),
        },
        resolve: {
            alias: {
                "@": "src",
                "@components": "src/components",
            },
        },
        plugins: [
            vue(),
            styleImport({
                resolves: [VantResolve()],
            }),
            viteStaticCopy({
                targets: [
                    {
                        src: "data/*",
                        dest: "data",
                    },
                ],
            }),
        ],
    });
};
