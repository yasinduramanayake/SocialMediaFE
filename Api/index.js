import axios from "axios";
import notification from "@/ApiConstance/toast";

export const api = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
});

api.interceptors.request.use(
  function (config) {
    if (localStorage.token) {
      config.headers.Authorization = `Bearer ${localStorage.token}`;
    }

    // console.log(config.headers.Authorization);
    return config;
  },
  function (error) {
    // Do something with request errora
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    return response;
  },

  function (error) {
   
    if (typeof error.response !== "undefined") {
      //Setup Generic Response Messages

      if (error.response.config.url !== "/tokenexdate") {
        if (error.response.status === 401) {
          notification.toast(error.response.data.message, "error");
        }
      }

      if (error.response.status === 403) {
        notification.toast(error.response.data.message, "error");
      }

      if (error.response.status === 404) {
        notification.toast(error.response.data.message, "error");
      }
      if (error.response.status === 405) {
        notification.toast(error.response.data.message, "warning");
      }
      if (error.response.status === 422) {
        notification.toast(error.response.data.message, "error");
      }
      if (error.response.status === 500) {
          notification.toast(error.response.statusText, "error");
        
      }
    }
    return Promise.reject(error);
  }
);
