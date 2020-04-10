<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div class="form-group">
          <label for>username</label>
          <input v-model="user.username" class="form-control" type="text" />
        </div>
        <div class="form-group">
          <label for>mail</label>
          <input v-model="user.mail" class="form-control" type="text" />
        </div>
        <button @click.prevent="submit" class="btn btn-primary">Submit</button>
        <hr />
        <button @click.prevent="getData" class="btn btn-primary">Get Data</button>
        <br />
        <br />
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="(u, idx) in users"
            :key="idx"
          >{{u.username}} // {{u.mail}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    user: {
      username: "",
      mail: ""
    },
    users: []
  }),
  methods: {
    submit() {
      this.$http
        .post(process.env.VUE_APP_ROOT_URL, this.user)
        .then(
          res => {
            console.log(res);
          },
          error => {
            console.log(error);
          }
        );
    },
    getData() {
      // for some reasons we can skip the second .then by looping on res.data ????
      this.$http
        .get(process.env.VUE_APP_ROOT_URL)
        .then(res => {
          return res.json();
        })
        .then(data => {
          const resultArray = [];
          for (let key in data) {
            resultArray.push(data[key]);
          }
          this.users = resultArray;
        });
    }
  }
};
</script>

<style>
</style>
