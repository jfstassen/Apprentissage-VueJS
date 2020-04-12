<template>
  <div>
    <!-- <p>Counter is: {{ counter }}</p>
    <p>number of clicks: {{ clicks}}</p>-->
    <p>Counter is: {{ doubleCounter }}</p>
    <p>number of clicks: {{ stringCounter }}</p>
  </div>
</template>

<script>
/////lesson 267
import { mapGetters } from "vuex";
export default {
  //   props: ["counter"]
  ///// lesson 266
  // computed: {
  //   counter() {
  //     return this.$store.getters.doubleCounter;
  //   },
  //   // lesson 267
  //   clicks() {
  //     return this.$store.getters.stringCounter;
  //   }
  // },
  ///// Save a lot of code lines by using mapGetters by calling getters from store:
  // computed: mapGetters(["doubleCounter", "stringCounter"])
  ///// problem now is we can't add computed property on our comp ... unless:
  computed: {
    ...mapGetters(["doubleCounter", "stringCounter"])
    // ourOwnComputedProperty(){}
  }
};
</script>