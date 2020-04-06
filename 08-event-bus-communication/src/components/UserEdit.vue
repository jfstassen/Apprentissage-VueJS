<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>User Age: {{userAge}}</p>
    <button @click="editAge">Edit Age</button>
  </div>
</template>

<script>
import { eventBus } from "../main"; // on importe le bus
export default {
  props: {
    userAge: Number
  },
  methods: {
    editAge() {
      this.userAge = 30;
      //   this.$emit("ageWasEdited", this.userAge);
      //   eventBus.$emit("ageWasEdited", this.userAge); With event Bus
      eventBus.changeAge(this.userAge); // On centralise le code dans main.js
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
