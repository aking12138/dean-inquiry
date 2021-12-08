import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import router, { resetRouter, constantRoutes } from "@/router";
import Home from "@/views/Layout";
import { loginApi } from "@/api/login/login";
import store from "./store";

// NProgress 的一些配置
NProgress.configure({ showSpinner: false });
//不需要权限验证的路径
const whiteList = ["/login", "/auth-redirect"];

router.beforeEach(async (to, from, next) => {
  // 开始NProgress
  NProgress.start();
  // 获取token
  const hasToken = sessionStorage.getItem("token");
  if (hasToken) {
    if (to.path === "/" || to.path === "/login") {
      // 如果已经登录那么重定向到首页
      next({ path: "/index" });
      //NProgress结束
      NProgress.done();
    } else {
      // 获取角色，这里角色是存在vuex中的
      const hasRoles = store.getters.roleId;
      if (hasRoles) {
        next();
      } else {
        try {
          //拿到用户名，通过用户名去查询用户角色
          let name = sessionStorage.getItem("name");
          //查询用户角色
          const roleId = await loginApi.getRoleId(name);
          // 将角色保存到vuex中
          store.dispatch("setROLEID", roleId);
          //根据角色获取对应的路由信息
          const accessRoutes = await loginApi.getRouter(roleId);
          //添加路由，这里是自己定义的添加路由的方法，可以根据自己公司定义的前后台传参方式进行自定义编写
          await controlRouter(accessRoutes);
          //hack方法以确保addRoute是完整的
          //设置replace:true，这样导航将不会留下历史记录
          next({ ...to, replace: true });
        } catch (error) {
          //删除令牌并转到登录页面重新登录
          next(`/login?redirect=${to.path}`);
          NProgress.done();
        }
      }
    }
  } else {
    /* 没有token 也可以登录的页面*/
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免登录白名单中，直接进入
      next();
    } else {
      //没有访问权限的其他页面将重定向到登录页面
      next(`/login?redirect=${to.path}`);
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  //完成进度条
  NProgress.done();
});

//路由器数据拼接
export function controlRouter(accessRoutes) {
  for (let i = 0; i < accessRoutes.length; i++) {
    let sumMenu = {
      path: "/" + accessRoutes[i].MENU_URL,
      component: Home,
      name: accessRoutes[i].MENU_NAME,
      iconCls: accessRoutes[i].MENU_ICON,
      redirect: accessRoutes[i].MENU_REDIRECT,
    };
    if (accessRoutes[i].children) {
      sumMenu["children"] = [];
      for (let j = 0; j < accessRoutes[i].children.length; j++) {
        //是否是iframe页面
        if (accessRoutes[i].children[j].MENU_REPORT === "true") {
          const MENU_REPORT_PATH = accessRoutes[i].children[j].MENU_REPORT_PATH;
          sumMenu["children"][j] = {
            props: () => {
              return {
                path: MENU_REPORT_PATH,
              };
            },
            path: `${accessRoutes[i].children[j].MENU_PATH}`,
            iconCls: accessRoutes[i].children[j].MENU_ICON,
            component: (resolve) =>
              require(["./../public/static/report/test"], resolve),
            name: accessRoutes[i].children[j].MENU_NAME,
          };
        } else {
          sumMenu["children"][j] = {
            path: accessRoutes[i].children[j].MENU_PATH,
            iconCls: accessRoutes[i].children[j].MENU_ICON,
            component: () =>
              import(`@/views/${accessRoutes[i].children[j].MENU_URL}`),
            name: accessRoutes[i].children[j].MENU_NAME,
          };
        }
      }
    }
    //this.$router不是响应式的,所以手动将路由元注入路由对象
    resetRouter();
    router.options.routes = constantRoutes;
    router.options.routes.push(sumMenu);
    router.addRoute(sumMenu); //添加到路由
  }
}
