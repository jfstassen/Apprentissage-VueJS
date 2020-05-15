<template>
  <div>
    <!-- <h1>Create Event, {{userName}}</h1> -->
    <h1>Create Event, {{user.name}}</h1>
    <p>This event was created by {{user.id}}</p>
    <p>There are {{catLength}} categories</p>
    <ul>
      <li v-for="cat in categories" :key="cat">{{cat}}</li>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed:
    // userName(){
    //   return this.$store.state.user.name
    // }

    // mapState({
    //   userName: state => state.user.name,
    //   userID: state => state.user.id,
    //   categories: state => state.categories
    // })

    // mapState({
    //   user: 'user',
    //   categories: 'categories'
    // })

    // mapState(['user', 'categories'])

    {
      // pour eviter de faire du computed sur du $store.state on fait ca sur un getters et on l'appelle ensuite
      catLength() {
        return this.$store.getters.catLength
      },
      ...mapState({
        user: 'user',
        categories: 'categories'
      })
    }
}
</script>