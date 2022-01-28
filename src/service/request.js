import axios from "axios";
import { notification } from "antd";
import { BASE_URL, TIMEOUT } from "./config";

const openNotificationWithIcon = (type, message, description = "请求失败，请稍后再试") => {
  notification[type]({
    message: message,
    description: description,
  });
};

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

instance.interceptors.request.use(
  (config) => {
    console.log("请求被拦截");
    return config;
  },
  (err) => {}
);

instance.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          openNotificationWithIcon("error", "请求错误");
          console.log("请求错误");
          break;
        case 401:
          openNotificationWithIcon("error", "未授权访问");
          console.log("未授权访问");
          break;
        default:
          openNotificationWithIcon("error", "请求错误");
          console.log("请求错误");
          break;
      }
    }
  }
);

export default instance;
