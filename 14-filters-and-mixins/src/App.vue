<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        {{text | toUppercase | to-lowercase}}
        <hr />
        <button @click="fruits.push('orange')">Add New Item</button>
        <input v-model="filterText" type="text" />
        <ul>
          <li v-for="(fruit, idx) in filteredFruits" :key="idx">{{fruit}}</li>
        </ul>
        <hr />
        <List></List>
      </div>
    </div>
  </div>
</template>

<script>
import List from "./List";
import { fruitMixin } from "./fruitMixin";
export default {
  mixins: [fruitMixin],
  data() {
    return {
      text: "hello there"
      // fruits: ["Apple", "Banana", "Mango", "Melon"],
      // filterText: ""
    };
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  },
  // computed: {
  //   filteredFruits() {
  //     return this.fruits.filter(fr => fr.match(this.filterText));
  //   }
  // },
  components: {
    List
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
