import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
// 路由异步加载组件
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue")
  }
];

const router = new VueRouter({
  mode: "hash",
  base: "/manager",
  routes
});

export default router;
