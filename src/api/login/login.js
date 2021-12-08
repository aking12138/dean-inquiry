import baseRequest from "@/request/request.js";

export const loginApi = {
  /**
   * 登录
   */
  getUser(params) {
    const url = "/api/signin";
    let baseRequestFun = new baseRequest(url, params);
    return baseRequestFun.post();
  },
  /**
   * 获取角色
   */
  getRoleId(param) {
    const url = `/api/signin/getRoleId/${param}`;
    let baseRequestFun = new baseRequest(url);
    return baseRequestFun.get();
  },
  /**
   * 根据角色获取路由
   */
  getRouter(param) {
    const url = `/api/system/getRouter/${param}`;
    let baseRequestFun = new baseRequest(url);
    return baseRequestFun.get();
  },
};
