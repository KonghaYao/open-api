import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import styleImport, { VantResolve } from "vite-plugin-style-import";

// https://vitejs.dev/config/
export default defineConfig({
    define: {
        __baseURL__: JSON.stringify(
            "https://cdn.jsdelivr.net/gh/KonghaYao/open-api/"
        ),
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
    ],
});
