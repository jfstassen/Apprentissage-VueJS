import User from "./components/user/User.vue";
import Home from "./components/Home.vue";
import UserStart from "./components/user/UserStart";
import UserDetail from "./components/user/UserDetail";
import UserEdit from "./components/user/UserEdit";
import Header from "./components/Header";

export const routes = [
  // { path: "/", component: Home, name: "home" },
  {
    path: "/",
    name: "home",
    components: { default: Home, "header-top": Header }
  },
  // {
  //   path: "/user",
  //   component: User,
  //   children: [
  //     { path: "", component: UserStart },
  //     { path: ":id", component: UserDetail },
  //     { path: ":id/edit", component: UserEdit, name: "userEdit" }
  //   ]
  // } //exemple.com/user/id
  {
    path: "/user",
    components: { default: User, "header-bottom": Header },
    children: [
      { path: "", component: UserStart },
      { path: ":id", component: UserDetail },
      { path: ":id/edit", component: UserEdit, name: "userEdit" }
    ] //exemple.com/user/id
  }, 
  {path : '/redirect-me', redirect: "/"},
  {path : '*', redirect: "/"}
];
