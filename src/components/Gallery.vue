<template>
  <mdb-container class="mt-5">
    <div class="gallery" id="gallery">
      <transition
        v-for="(img, i) in imgs"
        :key="i"
        @enter="enter"
        @after-enter="afterEnter"
        @before-leave="beforeLeave"
      >
        <div v-if="show === 'all' || show === '2'" class="mb-3 pics all 2 animation" style>
          <img class="img-fluid" :src="img" alt="Card image cap" />
        </div>
      </transition>
    </div>
  </mdb-container>
</template>
<script>
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbIcon,
  mdbBtn,
  mdbLightbox,
  mdbCarousel,
  mdbCard,
  mdbModal,
  mdbModalHeader,
  mdbModalTitle,
  mdbModalBody,
  mdbModalFooter,
  mdbNavItem
} from "mdbvue";

import imgs from "../assets/imgsList";

export default {
  name: "GalleryPage",
  data() {
    return {
      show: "all"
    };
  },
  computed: {
    imgs: {
      get() {
        return imgs.map(el => `assets/imgs/${el}`);
      }
    }
  },
  methods: {
    enter(el) {
      el.style.opacity = 0;
    },
    afterEnter(el) {
      el.style.opacity = 1;
    },
    beforeLeave(el) {
      el.style.opacity = 0;
    }
  },
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon,
    mdbBtn,
    mdbLightbox,
    mdbCarousel,
    mdbCard,
    mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter,
    mdbNavItem
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gallery {
  -webkit-column-count: 3;
  -moz-column-count: 3;
  column-count: 3;
  -webkit-column-width: 33%;
  -moz-column-width: 33%;
  column-width: 33%;
}
.gallery .pics {
  -webkit-transition: all 350ms ease;
  transition: all 350ms ease;
}
.gallery .animation {
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}

@media (max-width: 450px) {
  .gallery {
    -webkit-column-count: 1;
    -moz-column-count: 1;
    column-count: 1;
    -webkit-column-width: 100%;
    -moz-column-width: 100%;
    column-width: 100%;
  }
}

@media (max-width: 400px) {
  .btn.filter {
    padding-left: 1.1rem;
    padding-right: 1.1rem;
  }
}
</style>