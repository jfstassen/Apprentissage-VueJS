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
          <v-form class="px-3" ref="vanillaVueJsForm">
            <v-text-field
              v-model="title"
              label="Title"
              prepend-icon="mdi-folder"
              :rules="inputRules"
            ></v-text-field>
            <v-textarea
              v-model="content"
              label="Information"
              prepend-icon="mdi-pencil"
              :rules="inputRules"
            ></v-textarea>
            <v-menu
              v-model="menu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="290px"
              :nudge-right="40"
              :rules="inputRules"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="formattedDate"
                  label="Due date"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="due" @input="menu = false"></v-date-picker>
            </v-menu>
            <v-spacer></v-spacer>
            <v-btn text class="success mx-0 mt-3" @click="submit">Add Project</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      title: "",
      content: "",
      menu: false,
      due: undefined,
      inputRules: [v => v.length >= 3 || "Minimum length is 3 characters"]
    };
  },
  methods: {
    submit() {
      this.$refs.vanillaVueJsForm.validate() &&
        console.log(this.title, this.content);
    }
  },
  computed: {
    formattedDate() {
      return this.due && moment(this.due).format("Do MMMM YYYY");
    }
  }
};
</script>

<style>
</style>