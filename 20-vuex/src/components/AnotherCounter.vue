<template>
  <div>
    <!-- <button class="btn btn-primary" @click="increment">Increment</button> -->
    <!-- <button class="btn btn-primary" @click="decrement">Decrement</button> -->
    <!-- lesson 269 -->
    <button class="btn btn-primary" @click="increment">Increment</button>
    <button class="btn btn-primary" @click="decrement">Decrement</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  // methods: {
  //   increment() {
  //     //   this.$emit("updated", 1);
  //     this.$store.state.counter++;
  //   },
  //   decrement() {
  //     //   this.$emit("updated", -1);
  //     this.$store.state.counter--;
  //   }
  // },

  ///// lesson 269
  // methods: {
  //   increment() {
  //     this.$store.commit("incrementMU");
  //   },
  //   decrement() {
  //     this.$store.commit("decrementMU");
  //   }
  // }
  ////We can also use mapMutations (just like mapGetters)
  methods: {
    ...mapMutations({ increment: "incrementMU", decrement: "decrementMU" })
    // ou bien un array si les noms sont les memes ["increment", "decrement"]
  }
};
</script>