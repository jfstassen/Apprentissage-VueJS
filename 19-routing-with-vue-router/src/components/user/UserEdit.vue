<template>
  <div>
    <h3>Edit the User</h3>
    {{$route.params.id}}
    <p>Locale: {{$route.query.locale }}</p>
    <p>Analytics: {{$route.query.q }}</p>
    <hr />
    <button class="btn btn-primary" @click="confirmed = true">Confirm</button>
    <p v-if="confirmed">Confirmed ! You may now leave or go back !</p>
    <div style="height: 900px"></div>
    <p id="data">some extra data</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      confirmed: false
    };
  },
  beforeRouteLeave(to, from, next) {
    if (this.confirmed) {
      next();
    } else {
      if (confirm("are you sure to leave without saving ?")) {
        next();
      } else {
        next(false); // error caught in promise, idk why
      }
    }
  }
};
</script>

<style>
</style>