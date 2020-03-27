Vue.component("message", {
  props: ["title", "body"],
  data(){
    return{
      isVisible: true
    }
  },
  template: `
<article class="message" v-show="isVisible">
  <div class="message-header">
    {{title}}
    <button class="delete" aria-label="delete" @click="deleteMessage"></button>
  </div>
  <div class="message-body">
    {{body}}
  </div>
</article>`,
  methods: {
    deleteMessage(){
      this.isVisible = false;
    }
  }
});

Vue.component("task-list", {
  template: '<ul><task v-for="task in tasks">{{task.task}}</task></ul>',
  data() {
    return {
      tasks: [
        { task: "go to the store", complete: true },
        { task: "go to the gym", complete: false },
        { task: "go to bed", complete: false },
        { task: "wake up", complete: false }
      ]
    };
  }
});

Vue.component("task", {
  template: "<li><slot></slot></li>",
  data() {
    return {
      message: "food"
    };
  }
});

new Vue({
  el: "#root"
});
