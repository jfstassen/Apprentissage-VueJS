<template>
  <div>
    <h1>Filters & Mixins</h1>
    <input v-model="filterText" type="text" />
    <ul>
      <li v-for="(fruit, idx) in filteredFruits" :key="idx">{{fruit}}</li>
    </ul>
  </div>
</template>

<script>
import { fruitMixin } from "./fruitMixin";
export default {
  mixins: [fruitMixin],
  created() {
    console.log("inside list created hook");
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
