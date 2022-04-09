import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import "@vant/touch-emulator";
import { Lazyload, Toast } from "vant";
import piniaPluginPersist from "pinia-plugin-persist";
import router from "./routers";
import { useIcon } from "@konghayao/vue-material-icons/src/components/useIcon";

useIcon();

// pinia 中心管理
const pinia = createPinia().use(piniaPluginPersist);

// vant 相关功能
Toast.setDefaultOptions({ position: "bottom" });

// vue 初始化
createApp(App)
    .use(router)
    .use(pinia)
    // vant 的懒加载组件
    .use(Lazyload, {
        lazyComponent: true,
    })
    .mount("#app");
