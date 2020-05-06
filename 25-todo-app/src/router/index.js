import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

function loadView(view) {
  return () =>
    import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`);
}
const routes = [
  {
    path: "/",
    name: "dashboard",
    component: loadView("Dashboard"),
  },
  {
    path: "/projects",
    name: "projects",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/Projects.vue"),
    component: loadView("Projects")
  },
  {
    path: "/team",
    name: "team",
    component: loadView("Team"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
