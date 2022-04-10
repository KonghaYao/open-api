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
    {
        name: "404",
        path: "/404",
        component: () => import("../views/404.vue"),
        children: [],
    },
    // 重定向路由
    { path: "/:pathMatch(.*)*", redirect: "/index" },
];
export default createRouter({
    history: createWebHashHistory(),
    routes,
});
