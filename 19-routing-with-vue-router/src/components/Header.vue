<template>
  <ul class="nav nav-pills">
    <!-- <li role="presentation"><router-link to="/">Home</router-link></li>
    <li role="presentation"><router-link to="/user">User</router-link></li> -->

    <!-- USE ACTIVE CLASS -->
    <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
    <router-link to="/user" tag="li" active-class="active"><a>User</a></router-link>
  </ul>
</template>

<script>
export default {

}
</script>

<style>

</style>