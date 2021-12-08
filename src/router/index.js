import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/views/Layout";
// 该 js 实现了逻辑的第一步，配置两个路由
// 公共的路由
export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true, // 因为无需在侧边栏显示，可以用这个字段来控制隐藏
  },
  {
    path: "/index",
    component: Layout, // 这是一个框架组件，顶部和侧边栏会固定加载
    redirect: "/homePage", // 重定向的就是中间的内容部分
    hidden: true,
    children: [
      {
        path: "/homePage",
        component: () => import("@/views/homePage"),
        name: "homePage",
        meta: { title: "homePage", icon: "homePage" },
      },
    ],
  },
];

// 先把公共路由添加进路由实例，动态的路由手动添加
const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes,
});

export function resetRouter() {
  const newRouter = createRouter({
    history: createWebHistory(),
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });
  router.resolve = newRouter.resolve; // the relevant part
}

export default router;
