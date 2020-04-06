<template>
  <div>
    <h3>New Quote</h3>
    <button @click="counter++">+1</button>
    {{counter}}
  </div>
</template>

<script>
// LE COMPOSANT MEURT QUAND ON SWITCH (destroy() est appelé).
// Pour eviter on peut englobber le <component></component> dans un <keep-alive></keep-alive>
export default {
  data: ()=> ({
    counter: 0
  }),
  destroyed(){
    console.log('prouve que ca detruit bien')
  },
  // LIFE CYCLE HOOKS
  deactivated(){
    console.log("deactivated")
  },
  activated(){
    console.log("activated")
  }
};
</script>

<style scoped>
</style>