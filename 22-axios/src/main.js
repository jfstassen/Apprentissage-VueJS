import Vue from "vue";
import App from "./App.vue";
import axios from "axios";

import router from "./router";
import store from "./store";

import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

// something.firebaseio.com
axios.defaults.baseURL = process.env.VUE_APP_URL;
//global config -> F12 networks -> users.js
// axios.defaults.headers.common["Authorization"] = "dzad"; //Auth peut etre changer en n'importe quoi
axios.defaults.headers.get["Accepts"] = "application/json";

// function that are executed on every req that leave the app or every response that reaches it
const reqInterceptor = axios.interceptors.request.use((config) => {
  console.log("Request Interceptor", config);
  // stuff
  return config;
});
const resInterceptor = axios.interceptors.response.use((res) => {
  console.log("Response Interceptor", res);
  // stuff
  return res;
});

axios.interceptors.request.eject(reqInterceptor);
axios.interceptors.request.eject(resInterceptor);

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
});
