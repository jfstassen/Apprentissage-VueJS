<template>
  <div class="projects mx-4 mb-4">
    <h1 class="subtitle-1 grey--text">Projects</h1>
    <v-container class="my-5">
      <v-row justify="center">
        <v-expansion-panels popout>
          <v-expansion-panel v-for="project in myProjects" :key="project.title">
            <v-expansion-panel-header>{{project.title}}</v-expansion-panel-header>
            <v-expansion-panel-content class="px-4 grey--text">
              <div class="font-weight-bold">{{project.due}}</div>
              <div>{{project.content}}</div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
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
  computed: {
    myProjects() {
      return this.projects.filter(project => project.person === "Ryu");
    }
  },
    created(){
    // https://www.youtube.com/watch?v=LTKBEMgTIDk&list=PL4cUxeGkcC9g0MQZfHwKcuB0Yswgb3gA5&index=31
    // documents that have been changed in firestore when we received the snapshot object
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
