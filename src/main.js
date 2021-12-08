import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./permission"; // permission control

createApp(App).use(store).use(ElementPlus).use(router).mount("#app");
