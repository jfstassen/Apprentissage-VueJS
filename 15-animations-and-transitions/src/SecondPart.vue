<template>
  <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
    <h3>CSS - Seconde Partie: Key & Mode</h3>
    <select v-model="alertAnimation" class="form-control">
      <option value="fade">Fade</option>
      <option value="slide">Slide + Fade</option>
    </select>
    <button class="btn btn-primary" @click="show = !show">Show alert</button>
    <!-- Key and mode to make animation between two elements -->
    <transition appear :name="alertAnimation" mode="out-in">
      <div
        class="alert alert-info"
        v-if="show"
        key="info"
      >This is selectable transition on Page Load</div>
      <div
        class="alert alert-warning"
        v-if="!show"
        key="warning"
      >This is selectable transition on Page Load</div>
    </transition>
    <hr />
    <!--//// ANIMATION EN JS //// -->
    <h3>JS - Animations</h3>
    <button class="btn btn-primary" @click="load = !load">Load / Remove Element</button>
    <br />
    <br />
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
      :css="false" 
     ><!-- css false => don't look for css classes -->
      <div style="width: 100px; height: 100px; background-color: lightgreen" v-if="load"></div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      alertAnimation: "fade",
      // JS ANIM
      load: true
    };
  },
  // JS ANIM
  methods: {
    beforeEnter(el) {
      console.log("beforeEnter ", el);
    },
    enter(el, done) {
      console.log("enter ", el);
      done(); // needed to tell vue when animation finishes (no need to use done on css animations because it knows when it finished)
    },
    afterEnter(el) {
      console.log("afterEnter ", el);
    },
    enterCancelled(el) {
      console.log("enterCancelled ", el);
    },
    beforeLeave(el) {
      console.log("beforeLeave ", el);
    },
    leave(el, done) {
      console.log("leave ", el);
      done(); // needed to tell vue when animation finishes (no need to use done on css animations because it knows when it finished)
    },
    afterLeave(el) {
      console.log("afterLeave ", el);
    },
    leaveCancelled(el) {
      console.log("leaveCancelled ", el);
    }
  }
};
</script>

<style scoped>
.fade-enter {
  /* rules only for the first frame, after it removes what is written here*/
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave {
  /* opacity: 1; */
}
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}

/* Animations */
.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 1s;
}
.slide-leave {
}
.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 3s;
  opacity: 0;
}
@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
