/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import Axios from "axios";
import router from "@/router";
import { ElMessage } from "element-plus";

const axios = Axios.create({
  baseURL: process.env.VUE_APP_URL, // url = base url + request url
  timeout: 5000, // request timeout
});

// post请求头
axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";
// request interceptor
axios.interceptors.request.use(
  (config) => {
    // do something before request is sent
    if (sessionStorage.getItem("token")) {
      config.headers["Authorization"] =
        "bearer " + sessionStorage.getItem("token"); // 让每个请求携带自定义 token 请根据实际情况自行修改
    }
    return config;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);
// http response 拦截器
axios.interceptors.response.use(
  (response) => {
    const data = response.data;
    // 根据返回的code值来做不同的处理(和后端约定)
    switch (data.code) {
      case 401:
        // 未登录 清除已登录状态
        if (router.history.current.name !== "login") {
          if (data.msg !== null) {
            ElMessage({
              message: data.msg,
              type: "error",
              duration: 5 * 1000,
            });
          } else {
            ElMessage({
              message: "未知错误，请重新登录",
              type: "error",
              duration: 5 * 1000,
            });
          }
          router.push("/login");
        }
        break;
      case 403:
        // 没有权限
        if (data.msg !== null) {
          ElMessage({
            message: data.msg,
            type: "error",
            duration: 5 * 1000,
          });
        } else {
          ElMessage({
            message: "未知错误，请重新登录",
            type: "error",
            duration: 5 * 1000,
          });
        }
        break;
      case 500:
        // 错误
        if (data.msg !== null) {
          ElMessage({
            message: data.msg,
            type: "error",
            duration: 5 * 1000,
          });
        } else {
          ElMessage({
            message: "未知错误，请重新登录",
            type: "error",
            duration: 5 * 1000,
          });
        }
        break;
      default:
        return data;
    }
    return data;
  },
  (err) => {
    // 返回状态码不为200时候的错误处理
    ElMessage({
      message: err.toString(),
      type: "error",
      duration: 5 * 1000,
    });
    return Promise.resolve(err);
  }
);
export default axios;
