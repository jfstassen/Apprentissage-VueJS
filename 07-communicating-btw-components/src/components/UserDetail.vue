<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{myName}}</p>
    <p>User Age: {{userAge}}</p>
    <p>Switched name: {{switchName(myName)}}</p>
    <button @click="resetName">reset name with custom event</button>
    <button @click="resetFn()">reset name without custom event but with callback instead</button>
  </div>
</template>

<script>
export default {
  props: {
    myName: {
      //validating props
      type: String,
      required: true
      //default: "max"
    },
    resetFn : Function,
    userAge: Number
  },
  methods: {
    switchName() {
      return this.myName
        .split("")
        .reverse()
        .join("");
    },
    resetName(){
      this.myName = "Max";
      this.$emit("nameWasReset", this.myName); //emits event to parent component
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
