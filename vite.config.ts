import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import styleImport, { VantResolve } from "vite-plugin-style-import";

// https://vitejs.dev/config/
export default defineConfig({
    define: {
        __baseURL__: JSON.stringify("http://127.0.0.1:4523/mock/807294"),
    },
    resolve: {
        alias: {
            "@/": "src/",
            "@components/": "src/components/",
        },
    },
    plugins: [
        vue(),
        styleImport({
            resolves: [VantResolve()],
        }),
    ],
});
