<template>
  <div>
    <h3>Some User Details</h3>
    <p>User ID: {{id}}</p>
    <!-- <router-link class="btn btn-secondary" tag="button" :to="'/user/' + id + '/edit'">Edit User</router-link> -->
    <!-- BETTER WAY: -->
    <router-link
      class="btn btn-secondary"
      tag="button"
      :to="{ name: 'userEdit', params:{id: $route.params.id} }"
    >Edit User</router-link>
  </div>
</template>


<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    };
  }
};
</script>

<style>
</style>