<template>
  <div class="team mx-4 mb-4">
    <h1 class="subtitle-1 grey--text">Team</h1>
    <v-container class="my-5">


      <v-row justify="center" class="justify-sm-start">
        <v-col cols="9" sm="6" md="4" lg="3" v-for="person in team" :key="person.name">
          <v-sheet sm="6" md="4" lg="3" outlined class="text-center" >
            <v-avatar size="100" class="red lighten-2 mt-4">
              <img :src="person.avatar" />
            </v-avatar>
            <!-- <v-card-text> -->
            <v-card-title>{{person.name}}</v-card-title>
            <v-card-subtitle>{{person.role}}</v-card-subtitle>
            <!-- </v-card-text> -->
            <v-card-actions>
              <v-btn text color="grey">
                <v-icon small left>mdi-message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-sheet>
        </v-col>
      </v-row>


    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  components: {},
  data() {
    return {
      team: [
        {
          name: "The Net Ninja",
          role: "Web developer",
          avatar: "https://api.adorable.io/avatars/100/a@adorable.png"
        },
        {
          name: "Ryu",
          role: "Graphic designer",
          avatar: "https://api.adorable.io/avatars/100/b@adorable.png"
        },
        {
          name: "Chun Li",
          role: "Web developer",
          avatar: "https://api.adorable.io/avatars/100/c@adorable.png"
        },
        {
          name: "Gouken",
          role: "HR",
          avatar: "https://api.adorable.io/avatars/100/d@adorable.png"
        },
        {
          name: "Yoshi",
          role: "Sales",
          avatar: "https://api.adorable.io/avatars/100/e@adorable.png"
        }
      ]
    };
  }
};
</script>
