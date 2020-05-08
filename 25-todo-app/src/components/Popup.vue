<template>
  <div>
    <v-dialog max-width="600px">
      <template v-slot:activator="{on}">
        <v-btn text class="success" @click.stop="dialog = true" v-on="on">Add new Project</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>