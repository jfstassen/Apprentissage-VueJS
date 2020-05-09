<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Vuetify Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-for="link in links"
        :key="`${link.label}-header-link`"
        text
        rounded
        :to="link.url"
      >{{ link.label }}</v-btn>
      <!-- <v-btn @click="toggleTheme" text>Toggle Theme</v-btn> -->
      <div class="switch" @click="toggleTheme" :class="{ 'switched' : !this.$vuetify.theme.dark }">
        <div class="circle hover-target"></div>
      </div>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer color="primary lighten-1" padless>
      <v-layout justify-center wrap>
        <v-btn
          v-for="link in links"
          :key="`${link.label}-footer-link`"
          color="white"
          text
          rounded
          class="my-2"
          :to="link.url"
        >{{ link.label }}</v-btn>
        <v-flex primary lighten-2 py-4 text-center white--text xs12>
          {{ new Date().getFullYear() }} —
          <strong>Vuetify Dashboard</strong>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      links: [
        {
          label: "Home",
          url: "/"
        },
        {
          label: "Login",
          url: "/login"
        },
        {
          label: "Signup",
          url: "/signup"
        },
        {
          label: "Dashboard",
          url: "/dashboard"
        }
      ]
    };
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.themes.dark.anchor = "#41B883";
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
};
</script>

<style lang="scss">
@import "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/unicons.css";
:root {
  --dark-blue: #1f2029;
  --dark-light: #424455;
  --red: #da2c4d;
  --yellow: #f8ab37;
  --grey: #ecedf3;
  --dark: #343a40;
}

.switch,
.circle {
  -webkit-transition: all 300ms linear;
  transition: all 300ms linear;
}
.switch {
  width: 80px;
  height: 4px;
  border-radius: 27px;
  background-image: linear-gradient(298deg, var(--red), var(--yellow));
  position: relative;
  display: block;
  margin: 0 auto;
  text-align: center;
  opacity: 1;
  transform: translate(0);
  transition: all 300ms linear;
  transition-delay: 1900ms;
}
.circle {
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--dark-light);
  box-shadow: 0 4px 4px rgba(26, 53, 71, 0.25), 0 0 0 1px rgba(26, 53, 71, 0.07);
}
.circle:hover {
  box-shadow: 0 8px 8px rgba(26, 53, 71, 0.25), 0 0 0 1px rgba(26, 53, 71, 0.07);
}
.circle:before {
  position: absolute;
  font-family: "unicons";
  content: "\eac1";
  top: 0;
  left: 0;
  z-index: 2;
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  width: 100%;
  height: 40px;
  opacity: 1;
  color: var(--grey);
  -webkit-transition: all 300ms linear;
  transition: all 300ms linear;
}
.circle:after {
  position: absolute;
  font-family: "unicons";
  content: "\eb8f";
  top: 0;
  left: 0;
  z-index: 2;
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  width: 100%;
  height: 40px;
  color: var(--yellow);
  opacity: 0;
  -webkit-transition: all 300ms linear;
  transition: all 300ms linear;
}
.switched .circle {
  left: 40px;
  box-shadow: 0 4px 4px rgba(26, 53, 71, 0.25), 0 0 0 1px rgba(26, 53, 71, 0.07);
  background: var(--dark);
}
.switched .circle:hover {
  box-shadow: 0 8px 8px rgba(26, 53, 71, 0.25), 0 0 0 1px rgba(26, 53, 71, 0.07);
}
.switched .circle:before {
  opacity: 0;
}
.switched .circle:after {
  opacity: 1;
}
</style>