<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <hr />
        <select v-model="alertAnimation" class="form-control">
          <option value="fade">Fade</option>
          <option value="slide">Slide + Fade</option>
        </select>
        <button class="btn btn-primary" @click="show = !show">Show alert</button>
        <br />
        <br />
        <!-- special component -->
        <!-- on nomme notre animation fade -->
        <transition name="fade">
          <div class="alert alert-info" v-if="show">This is Fading</div>
        </transition>
        <!-- des que l'animation est finie, meme si la transaction pas finie, supprime ca du dom -->
        <transition name="slide" type="animation">
          <div class="alert alert-info" v-if="show">This is Sliding Animation</div>
        </transition>
        <!-- animer au page load -->
        <transition name="fade" appear>
          <div class="alert alert-info" v-if="show">This is Fading on Page Load</div>
        </transition>
        <!-- utiliser animateCSS comme librairie -->
        <transition appear enter-active-class="animated bounce" leave-active-class="animated shake">
          <div class="alert alert-info" v-if="show">This is Bouncing/Shaking on Page Load</div>
        </transition>
        <!-- choisir depuis menu Select - dynamic binding -->
        <transition appear :name="alertAnimation">
          <div class="alert alert-info" v-if="show">This is selectable transition on Page Load</div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      alertAnimation: "fade"
    };
  }
};
</script>

<style>
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
