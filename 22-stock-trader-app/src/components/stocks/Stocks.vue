<template>
  <div>
    <Stock v-for="(stock, idx) in stocks" :key="idx" :stock="stock"></Stock>
  </div>
</template>

<script>
import Stock from "./Stock";
export default {
  data() {
    return {
      stocks: [
        { id: 1, name: "Microsoft", price: 110 },
        { id: 2, name: "Google", price: 200 },
        { id: 3, name: "Apple", price: 190 },
        { id: 4, name: "Amazon", price: 310 },
        { id: 5, name: "Facebook", price: 411 }
      ]
    };
  },
  components: {
    Stock
  }
};
</script>

<style>
</style>