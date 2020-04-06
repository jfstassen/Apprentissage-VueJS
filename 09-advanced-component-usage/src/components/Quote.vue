<template>
  <div>
    <!-- <p>{{quote}}</p> -->
    <slot></slot>
    <hr>
    <!-- HOW TO SPLIT CONTENT IN SLOTS -->
    <div class="title">
      <slot name="title"></slot>
    </div>
    <hr>
    <div>
      <slot name="content"></slot>
      <!-- SI PAS DE 'subtitle' alors on render "The default subtitle" -->
      <span style="color: #ccc"><slot name="subtitle">The default subtitle</slot></span>
    </div>
  </div>
</template>

<script>
export default {
  // props: ["quote"] ou bien ↓
  props: {
    quote: String
  }
};
</script>

<style scoped>
div {
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px black;
  padding: 30px;
  margin: 30px auto;
  text-align: center;
}
/* LE STYLE ENFANT EST APPLIQUE AUX ELEMENTS NON STYLES VENUS DE PLUS HAUT */
h2 {
  color: red;
}
.title{
  font-style: italic;
}
</style>