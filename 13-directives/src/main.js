import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

// OPTION 1 - REGISTER GLOBALLY
Vue.directive("highlight", {
  bind(el, binding) {
    // el.style.backgroundColor = "green";
    // el.style.backgroundColor = binding.value;
    // if (binding.arg == "background") {
    //   el.style.backgroundColor = binding.value;
    // } else {
    //   el.style.color = binding.value;
    // }

    let delay = 0;
    if (binding.modifiers["delayed"]) {
      delay = 3000;
    }
    setTimeout(() => {
      if (binding.arg == "background") {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
  },
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
