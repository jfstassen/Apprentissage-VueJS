import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import { routes } from "./routes";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior(to, from, savedPosition){
    console.log(from) //annoying eslint
    if(savedPosition){ // retourne a la position precedente
      return savedPosition;
    }
    if(to.hash){
      return {selector: to.hash} //scroll down to hash si la valeur existe
    }
    return {x: 0, y: 0};  // sinon return top
    
  }
});
//gets invoked on each routing action
router.beforeEach((to, from, next) => {
  console.log(to, from, next); //annoying eslint
  console.log('global beforeEach')
  next(); //autorise la vue
  // next(false) // interdit l'acces
})

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
