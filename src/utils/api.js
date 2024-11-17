import axios from "axios";
import { updateToken, logout } from "./";

const instance = axios.create({
  baseURL: "http://localhost:5000/user/",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    if (localStorage.getItem("token")) {
      config.headers.Authorization = "Bearer " + localStorage.getItem("token");
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    if (axios.isCancel(error)) {
      return Promise.reject();
    }
    const originalRequest = error.config;

    if (error.response && error.response.status === 401) {
      if (!originalRequest._retry) {
        originalRequest._retry = true;
        await updateToken();
        return instance(originalRequest);
      }
      logout();
    }
    if (error.response) return Promise.reject(error.response.data.error);
    return Promise.reject(error.message);
  }
);

export default instance;
