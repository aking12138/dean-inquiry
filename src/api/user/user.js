import baseRequest from "@/request/request.js";
// import qs from "qs";

export const userApi = {
  /**
   * 获取数据来源
   */
  source() {
    let url = "/tmc/import/sourcea";
    let baseRequestFun = new baseRequest(url);
    return baseRequestFun.get();
  },
};

