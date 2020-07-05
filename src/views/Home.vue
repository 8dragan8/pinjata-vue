<template>
  <Navbar>
    <Contact />
    <Gallery />
    <!-- <Footer /> -->
  </Navbar>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '../components/HelloWorld.vue'
import Gallery from "../components/Gallery.vue";
// import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
import Contact from "../components/Contact.vue";
import { mdbContainer } from "mdbvue";

export default {
  name: "home",
  components: {
    mdbContainer,
    Gallery,
    Navbar,
    Contact,
    // Footer
  }
};
</script>

<style lang="scss">
body {
  background-color: #ffff66;
}
</style>