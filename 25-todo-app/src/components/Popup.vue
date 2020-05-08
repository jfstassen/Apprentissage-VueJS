<template>
  <div>
    <v-dialog max-width="600px" v-model="dialog" persistent>
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
            <v-card-actions>
              <v-btn :loading="loading" text color="success" class="mx-0 mt-3" @click="submit">Add Project</v-btn>
              <v-spacer></v-spacer>
              <v-btn text color="error" class="mx-0 mt-3" @click="dialog = false">Cancel</v-btn>
            </v-card-actions>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import moment from "moment";
import db from "@/firebase";
export default {
  data() {
    return {
      title: "",
      content: "",
      menu: false,
      dialog: false,
      due: undefined,
      loading: false,
      inputRules: [v => v.length >= 3 || "Minimum length is 3 characters"]
    };
  },
  methods: {
    submit() {
      if (this.$refs.vanillaVueJsForm.validate()) {
        this.loading = true;

        const project = {
          title: this.title,
          content: this.content,
          due: moment(this.due).format("Do MMMM YYYY"),
          person: "Ryu",
          status: "ongoing"
        };

        db.collection("projects")
          .add(project)
          .then(() => {
            this.loading = false;
            this.dialog = false;
          });
          // https://www.youtube.com/watch?v=FPJQg4phEPo&list=PL4cUxeGkcC9g0MQZfHwKcuB0Yswgb3gA5&index=29
      }
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