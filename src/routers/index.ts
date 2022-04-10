import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        name: "index",
        path: "/api/:api",
        component: () => import("../views/index.vue"),
        children: [],
    },
    {
        name: "404",
        path: "/404",
        component: () => import("../views/404.vue"),
        children: [],
    },
    // 重定向路由
    { path: "/:pathMatch(.*)*", redirect: "/404" },
];
export default createRouter({
    history: createWebHashHistory(),
    routes,
});
