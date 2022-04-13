import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        name: "home",
        path: "/index",
        component: () => import("../views/index.vue"),
    },
    {
        name: "api",
        path: "/api/:api",
        component: () => import("../views/api.vue"),
    },
    // 重定向路由
    { path: "/:pathMatch(.*)*", redirect: "/index" },
];
export default createRouter({
    history: createWebHashHistory(),
    routes,
});
