<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <!-- exercice 2 -->
        <button @click="selectedComponent = 'appQuote'">Quote</button>
        <button @click="selectedComponent = 'appAuthor'">Author</button>
        <button @click="selectedComponent = 'appNew'">New</button>
        <hr />
        <p>{{selectedComponent }}</p>
        <!-- DYNAMIC COMPONENT APPROACH-->
        <!-- Pour eviter le destroy -> <keep-alive></keep-alive> -->
        <keep-alive>
          <component :is="selectedComponent">
            <p>default content</p>
          </component>
        </keep-alive>

        <hr />
        <!-- exercice 1 -->
        <!-- <appQuote quote="A wonderful quote !"></appQuote> Recap -->
        <!-- <app-quote>
          <h1>Color passed from App.vue</h1>
          <h2 slot="title">{{quoteTitle}}</h2>
          <p slot="content">A random Quote</p>
        </app-quote>-->
      </div>
    </div>
  </div>
</template>

<script>
import QuoteVue from "./components/Quote.vue";
import appAuthor from "./components/Author.vue";
import appNew from "./components/New.vue";
export default {
  data: () => ({
    quoteTitle: "The quote",
    // exercice 2
    selectedComponent: "appQuote"
  }),
  components: {
    appQuote: QuoteVue,
    appAuthor,
    appNew
  }
};
</script>

<style>
h1 {
  color: yellow;
}
</style>
