<template>
  <div class="row">
    <!-- .native click on component -->
    <quote @click.native="deleteQuote(index)" v-for="(quote, index) in quotes" :key="index">
      {{quote}}
      <small>{{index}}</small>
    </quote>
  </div>
</template>

<script>
import Quote from "./Quote";
export default {
  props: {
    quotes: { type: Array }
  },
  components: {
    Quote
  },
  methods: {
    deleteQuote(index) {
      this.$emit("quoteDeleted", index);
    }
  }
};
</script>

<style>
</style>