import Vue from "vue";
import Vuex from "vuex";
import axios from "./axios-auth";
import globalAxios from "axios";
import router from "./router"; // need router to logout

Vue.use(Vuex);
const apikey=""
export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null,
  },
  mutations: {
    authUser(state, userData) {
      state.idToken = userData.token;
      state.userId = userData.userId;
    },
    storeUser(state, user) {
      state.user = user;
    },
    //logout
    clearAuthData(state) {
      state.idToken = null;
      state.userId = null;
    },
  },
  actions: {
    //logout after 3600 seconds
    setLogoutTimer({ commit }, expirationTime) {
      setTimeout(() => {
        commit("clearAuthData");
      }, expirationTime * 1000);
    },
    signup({ commit, dispatch }, authData) {
      axios
        .post(
          `/accounts:signUp?key=${apikey}`,
          {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          commit("authUser", {
            token: res.data.idToken,
            userId: res.data.localId,
          });
          // date when expires + lcoalstorage setup for auto-logging
          const now = new Date();
          const expirationDate = new Date(
            now.getTime() + res.data.expiresIn * 1000
          );
          localStorage.setItem("token", res.data.idToken);
          localStorage.setItem("userId", res.data.localId);
          localStorage.setItem("expiresIn", expirationDate);
          dispatch("storeUser", authData); // On passe les infos a l'action storeUser
          dispatch("setLogoutTimer", res.data.expiresIn);
        })
        .catch((err) => console.log(err));
    },
    signin({ commit, dispatch }, authData) {
      axios
        .post(
          `/accounts:signInWithPassword?key=${apikey}`,
          {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true,
          }
        )
        .then((res) => {
          const now = new Date();
          const expirationDate = new Date(
            now.getTime() + res.data.expiresIn * 1000
          );
          localStorage.setItem("token", res.data.idToken);
          localStorage.setItem("userId", res.data.localId);
          localStorage.setItem("expirationDate", expirationDate);
          commit("authUser", {
            token: res.data.idToken,
            userId: res.data.localId,
          });
          dispatch("setLogoutTimer", res.data.expiresIn);
        })
        .catch((err) => console.log(err));
    },
    tryAutoLogin({ commit }) {
      const token = localStorage.getItem("token");
      if (!token) {
        return;
      }
      const expirationDate = localStorage.getItem("expirationDate");
      const now = new Date();
      if (now >= expirationDate) {
        return;
      }
      //valid token
      const userId = localStorage.getItem("userId");
      commit("authUser", { token: token, userId: userId });
    },
    logout({ commit }) {
      commit("clearAuthData");
      localStorage.removeItem("expirationDate");
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      router.replace("/signin");
    },
    storeUser({ commit, state }, userData) {
      //on poste userData dans la DB
      if (!state.idToken) {
        //si c'est null, ne fais pas la requete
        return;
      }
      globalAxios
        .post("/users.json" + "?auth=" + state.idToken, userData)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    },
    fetchUser({ commit, state }) {
      if (!state.idToken) {
        //si c'est null, ne fais pas la requete
        return;
      }
      globalAxios
        .get("/users.json" + "?auth=" + state.idToken)
        .then((res) => {
          console.log(res);
          const data = res.data;
          const users = [];
          for (let key in data) {
            const user = data[key];
            user.id = key;
            users.push(user);
          }
          console.log(users);
          commit("storeUser", users[0]); //call storeUser mutation
        })
        .catch((err) => console.log(err));
    },
  },

  getters: {
    user(state) {
      return state.user;
    },
    isAuthenticated(state) {
      return state.idToken !== null;
    },
  },
});
