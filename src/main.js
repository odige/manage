import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { createRouter, createWebHashHistory } from "vue-router";

// 在此添加路由页面
import login from "@/components/LogIn.vue";
import home from "@/components/ManaGe.vue";
import accomplish from "@/components/AccomPlish.vue";
import order from "@/components/OrDer.vue";
import tag from "@/components/TaG.vue";

// 在此添加路由
const routes = [
  { path: "/", component: login },
  { path: "/home", component: home },
  { path: "/accomplish", component: accomplish },
  { path: "/order", component: order },
  { path: "/tag", component: tag },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
