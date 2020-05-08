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
        <v-card-text>
          <v-form class="px-3">
            <v-text-field v-model="title" label="Title" prepend-icon="mdi-folder"></v-text-field>
            <v-textarea v-model="content" label="Information" prepend-icon="mdi-pencil"></v-textarea>
            <v-btn text class="success mx-0 mt-3" @click="submit">Add Project</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data(){
    return {
      title:"",
      content:""
    }
  },
  methods:{
    submit(){
      console.log(this.title, this.content)
    }
  }
    
  }
</script>

<style>
</style>