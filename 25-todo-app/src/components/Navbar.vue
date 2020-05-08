<template>
  <nav>
    <!-- Snackbar -->
    <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
      Your project has been added
      <v-btn color="white" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
    <!-- end snackbar -->
    <v-navigation-drawer v-model="drawer" app class="primary">
      <v-row justify="center" class="my-3">
        <v-col cols="auto" align="center">
          <v-avatar size="100">
            <img src="https://api.adorable.io/avatars/100/b@adorable.png" />
          </v-avatar>
          <p class="white--text subtitle my-3">Ryu</p>
        </v-col>
        <!-- create project btn -->
        <v-col align="center" class="mt-4 mb-3">
          <Popup @projectAdded="snackbar = true" />
        </v-col>
      </v-row>
      <v-list>
        <v-list-item v-for="(link, idx) in links" :key="idx" :to="link.route">
          <v-list-item-action>
            <v-icon class="white--text">{{link.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar flat app>
      <!-- burger & App name -->
      <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>App</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- dropdown menu -->
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn color="grey" dark text v-on="on">
            <v-icon left>mdi-chevron-down</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(link, index) in links" :key="index" :to="link.route">
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- sign off btn -->
      <v-btn text color="grey">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
import Popup from "@/components/Popup";
export default {
  components: {
    Popup
  },
  data() {
    return {
      drawer: true,
      links: [
        { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
        { icon: "mdi-folder", text: "My Projects", route: "/projects" },
        { icon: "mdi-account", text: "Team", route: "/team" }
      ],
      snackbar: false
    };
  }
};
</script>

<style>
</style>