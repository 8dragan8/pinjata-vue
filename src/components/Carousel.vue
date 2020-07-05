<template>
  <b-carousel
    id="carousel"
    v-model="slide"
    :interval="1000"
    controls
    indicators
    @sliding-start="onSlideStart"
    @sliding-end="onSlideEnd"
  >
    <!-- Slides with image only -->
    <b-carousel-slide v-for="(img, i) in imgLinks" :key="i">
      <template v-slot:img>
        <img
          class="d-block class-name"
          width="100%"
          :src="img"
          alt="image slot"
          style="object-fit: scale-down; height: 50vh;"
        />
      </template>
    </b-carousel-slide>
  </b-carousel>
</template>

<script>
import imgs from "../../assets/imgsList";
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  computed: {
    imgLinks: {
      get() {
        return imgs.map(el => `assets/imgs/${el}`);
      }
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>

<style lang="scss">
img {
  object-fit: contain;
}
</style>