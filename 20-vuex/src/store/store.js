import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  // Lesson 2 : Getters pour eviter ... de repeter le code plusieurs fois si on doit traiter l'info
  // donc pour eviter de faire de la logique dans computed() localement (je crois) et faire ca plutot ici
  // donc ca servirait a faire la logique ici (lesson 266)
  getters: {
    doubleCounter: state => {
      return state.counter * 2;
    },
    // lesson 267
    stringCounter: state => {
      return state.counter + " clicks";
    }
  }
});
