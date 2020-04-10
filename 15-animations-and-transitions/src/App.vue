<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <h3>CSS - Premiere Partie</h3>
        <br />
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
    <SecondPart></SecondPart>
    <!-- Part 3 => Animation on dynamic components: -->
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <hr />
      <button
        class="btn btn-primary"
        @click="selectedComponent == 'SuccessAlert' ? selectedComponent = 'DangerAlert' : selectedComponent = 'SuccessAlert'"
      >Toggle Components</button>
      <br />
      <transition name="fade" mode="out-in">
        <component :is="selectedComponent"></component>
      </transition>
    </div>
    <!-- Part 4 => Transition-Group -->
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <hr />
      <button class="btn btn-primary" @click="addItem">Add Item</button>
      <br />
      <br />
      <ul class="list-group">
        <transition-group name="slide">
          <li
            class="list-group-item"
            v-for="(number, idx) in numbers"
            :key="number"
            @click="removeItem(idx)"
            :style="'cursor : pointer'"
          >{{number}}</li>
        </transition-group>
      </ul>
    </div>
  </div>
</template>

<script>
import SecondPart from "./SecondPart.vue";
import DangerAlert from "./DangerAlert.vue";
import SuccessAlert from "./SuccessAlert.vue";
export default {
  data() {
    return {
      show: true,
      alertAnimation: "fade",
      // Part3. Dynam. comp
      selectedComponent: "DangerAlert",
      // Part4. Transition-group
      numbers: [1, 2, 3, 4, 5]
    };
  },
  components: {
    SecondPart,
    // Part3. Dynam. comp
    DangerAlert,
    SuccessAlert
  },
  methods: {
    //Part4. Transition-group
    addItem() {
      const pos = Math.floor(Math.random() * this.numbers.length);
      this.numbers.splice(pos, 0, this.numbers.length + 1);
    },
    removeItem(idx) {
      this.numbers.splice(idx, 1);
    }
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
  /* debug transition-group on item removal */
  position: absolute;
}
/* PART 4. transition-Group GIVE US ACCESS TO A NEW CSS CLASS WHICH ATTACHS TO ALL ELEMENT THAT NEED TO CHANGE PLACE*/
.slide-move {
  transition: transform 1s;
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
