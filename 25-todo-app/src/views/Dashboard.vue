<template>
  <div class="dashboard mx-4 mb-4">
    <h1 class="subtitle-1 grey--text">Dashboard</h1>
    <v-container class="my-5">
      <!-- add filter -->
      <v-row class="mb-3">
        <v-col>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn small text color="grey" @click="sortBy('title')" v-on="on">
                <v-icon small left>mdi-folder</v-icon>
                <span class="caption text-lowercase">By project name</span>
              </v-btn>
            </template>
            <span>Sort projects by project name</span>
          </v-tooltip>

          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn small text color="grey" @click="sortBy('person')" v-on="on">
                <v-icon small left>mdi-account</v-icon>
                <span class="caption text-lowercase">By person</span>
              </v-btn>
            </template>
            <span>Sort projects by person</span>
          </v-tooltip>
        </v-col>
      </v-row>

      <v-card outlined class="px-3" v-for="(project) in projects" :key="project.id">
        <v-row :class="`pa-3 project ${project.status}`">
          <v-col cols="12" md="6">
            <div class="caption grey--text">Project Title</div>
            <div>{{project.title}}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">Person</div>
            <div>{{project.person}}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">Due by</div>
            <div>{{project.due}}</div>
          </v-col>
          <v-col cols="4" sm="4" md="2" class="d-flex align-center">
            <v-chip small :class="`${project.status} white--text caption`">{{project.status}}</v-chip>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import db from "@/firebase";

export default {
  components: {},
  data() {
    return {
      projects: [
        // {
        //   title: "Design a new website",
        //   person: "The Net Ninja",
        //   due: "1st Jan 2019",
        //   status: "ongoing",
        //   content:
        //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        // },
        // {
        //   title: "Code up the homepage",
        //   person: "Chun Li",
        //   due: "10th Jan 2019",
        //   status: "complete",
        //   content:
        //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        // },
        // {
        //   title: "Design video thumbnails",
        //   person: "Ryu",
        //   due: "20th Dec 2018",
        //   status: "complete",
        //   content:
        //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        // },
        // {
        //   title: "Create a community forum",
        //   person: "Gouken",
        //   due: "20th Oct 2018",
        //   status: "overdue",
        //   content:
        //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        // }
      ]
    };
  },
  methods: {
    sortBy(e) {
      this.projects.sort((a, b) => (a[e] < b[e] ? -1 : 1));
    }
  },
  created(){
    // https://www.youtube.com/watch?v=LTKBEMgTIDk&list=PL4cUxeGkcC9g0MQZfHwKcuB0Yswgb3gA5&index=31
    // doc that have been changed in firestore when we received the snapshot object
    db.collection("projects").onSnapshot(res => {
      const changes = res.docChanges();
      changes.map(change => {
        change.type ==="added" && this.projects.push({...change.doc.data(),
        id: change.doc.id})
      })
    })
  }
};
</script>

<style>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}
.v-chip.complete {
  background: #3cd1c2 !important;
}
.v-chip.ongoing {
  background: #ffaa2c !important;
}
.v-chip.overdue {
  background: #f83e70 !important;
}
</style>
