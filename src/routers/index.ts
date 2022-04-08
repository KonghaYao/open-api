import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        name: "index",
        path: "/index",
        component: () => import("../views/index.vue"),
    },
    // 重定向路由
    { path: "/:pathMatch(.*)*", redirect: "/index" },
];
export default createRouter({
    history: createWebHashHistory(),
    routes,
});
