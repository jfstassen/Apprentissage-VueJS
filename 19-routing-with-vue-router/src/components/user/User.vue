<template>
  <div>
    <h1>The User Page</h1>
    <hr />
    <button @click="navigateToHome" class="btn btn-primary">Go to Home</button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     id: this.$route.params.id // choppe le SLUG
  //   };
  // },
  methods: {
    navigateToHome() {
      //   this.$router.push("/");
      this.$router.push({ name: "home" });
    }
  },
  //surveille pour re-render quand le slug change
  // watch: {
  //   $route(to) {
  //     this.id = to.params.id;
  //   }
  // }
};
</script>

<style>
</style>