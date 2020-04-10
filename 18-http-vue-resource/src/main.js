import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.http.options.root = process.env.VUE_APP_ROOT_URL; //all requests will be sent to this url
///// Intercepting Requests and Responses LESSON
// Vue.http.interceptors.push((request, next) => {
//   console.log(request, next);
//   if (request.method == "POST") {
//     request.method = "PUT";
//   }
//   next(response=> {
//     response.json = () => {return {messages: response.body}}
//   });
// });

new Vue({
  render: h => h(App)
}).$mount("#app");
