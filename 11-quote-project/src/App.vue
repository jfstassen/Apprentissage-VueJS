<template>
  <div class="container">
    <Header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></Header>
    <!-- Listen to QuoteAdded and execute NewQuotefn -->
    <NewQuote @quoteAdded="newQuoteFn"></NewQuote>
    <QuoteGrid :quotes="quotes" @quoteDeleted="deleteQuoteFn"></QuoteGrid>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">Click on a quote to delete</div>
      </div>
    </div>
  </div>
</template>

<script>
import QuoteGrid from "./components/QuoteGrid";
import NewQuote from "./components/NewQuote";
import Header from "./components/Header";

export default {
  data: () => ({
    quotes: ["Just a quote to see something"],
    maxQuotes: 10
  }),
  components: {
    QuoteGrid,
    NewQuote,
    Header
  },
  methods: {
    newQuoteFn(quote) {
      this.quotes.length >= this.maxQuotes &&
        alert("you can't add more quote, delete some first");
      this.quotes = [quote, ...this.quotes];

      // this.quotes.push(quote);
    },
    deleteQuoteFn(index) {
      // this.quotes.splice(index, 1);
      this.quotes = this.quotes.filter((item, i) => i !== index);
    }
  }
};
</script>

<style>
</style>
