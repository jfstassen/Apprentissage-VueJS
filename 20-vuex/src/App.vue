<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Vuex</h1>
        <app-result></app-result>
        <another-result></another-result>
        <hr />
        <app-counter ></app-counter>
        <hr>
        <p>using mutation: $store.commit('function name')</p>
        <!--  lesson 269 -->
        <another-counter></another-counter>
      </div>
    </div>
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";
// lesson 269
import AnotherCounter from "./components/AnotherCounter.vue";
import Result from "./components/Result.vue";
import AnotherResult from "./components/AnotherResult.vue";

export default {
  components: {
    appCounter: Counter,
    appResult: Result,
    AnotherResult,
    // lesson 269
    AnotherCounter
  }
};
</script>

