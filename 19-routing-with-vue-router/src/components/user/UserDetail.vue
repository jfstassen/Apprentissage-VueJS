<template>
  <div>
    <h3>Some User Details</h3>
    <p>User ID: {{$route.params.id}}</p>
    <!-- <router-link class="btn btn-secondary" tag="button" :to="'/user/' + id + '/edit'">Edit User</router-link> -->
    <!-- BETTER WAY: -->
    <router-link class="btn btn-secondary" tag="button" :to="link">Edit User</router-link>
  </div>
</template>


<script>
export default {
  data() {
    return {
      link: {
        name: "userEdit",
        params: { id: this.$route.params.id },
        query: { locale: "en", q: 100 },
        hash: "#data"
      }
    };
  },
  beforeEnter(to, from, next) {
    console.log(to, from, next); //annoying eslint
    console.log(this.link); // won't work because it locks it if no next()
    // if () {
    next(); // check for auth
    // }else{
    // next(false)
    // }
  }
};
</script>

<style>
</style>