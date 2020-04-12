import Home from "./components/Home.vue";
import Header from "./components/Header";
// import User from "./components/user/User.vue";
// import UserStart from "./components/user/UserStart";
// import UserDetail from "./components/user/UserDetail";
// import UserEdit from "./components/user/UserEdit";
////// ACTIVER LAZY LOADING:
const User = resolve => {
  require.ensure(["./components/user/User.vue"], () => {
    resolve(require("./components/user/User.vue"));
  });
};
const UserStart = resolve => {
  require.ensure(["./components/user/UserStart.vue"], () => {
    resolve(require("./components/user/UserStart.vue"));
  });
};
const UserEdit = resolve => {
  require.ensure(["./components/user/UserEdit.vue"], () => {
    resolve(require("./components/user/UserEdit.vue"));
  });
};
const UserDetail = resolve => {
  require.ensure(["./components/user/UserDetail.vue"], () => {
    resolve(require("./components/user/UserDetail.vue"));
  });
};

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
      {
        path: ":id",
        component: UserDetail,
        beforeEnter: (to, from, next) => {
          console.log(to, from, next); //annoying eslint
          next(); // check on route lvl
        }
      },
      { path: ":id/edit", component: UserEdit, name: "userEdit" }
    ] //exemple.com/user/id
  },
  { path: "/redirect-me", redirect: "/" },
  { path: "*", redirect: "/" }
];
