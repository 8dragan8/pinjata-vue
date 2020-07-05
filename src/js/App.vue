<template>
  <b-container fluid transparent>
    <b-row class="justify-content-md-center">
      <b-col cols="8">
        <!-- <Carousel /> -->
        <Gallery />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Carousel from "./components/Carousel.vue";
import Gallery from "./components/Gallery.vue";
export default {
  name: "Pinjata",
  components: { Carousel, Gallery },
  data() {
    return {
      variable: "test1"
    };
  }
};
</script>

<style lang="scss">
html {
  padding: 0;
  margin: 0;
  height: 100vh;
  position: relative;
  background-color: #ffff66;
}
body {
  height: 100%;
  width: 100%;
  position: relative;
}
</style>