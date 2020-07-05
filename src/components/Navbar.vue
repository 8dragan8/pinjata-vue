<template>
  <div>
    <mdb-navbar position="top" dark color="yellow darken-2" scrolling>
      <mdb-navbar-brand href="#">
          <img src="" alt="">
      </mdb-navbar-brand>
      <!-- <mdb-navbar-toggler>
        <mdb-navbar-nav>
          <mdb-nav-item href="#" waves-fixed>Home</mdb-nav-item>
          <mdb-nav-item href="#" waves-fixed>Features</mdb-nav-item>
          <mdb-nav-item href="#" waves-fixed>Pricing</mdb-nav-item>
        </mdb-navbar-nav>
        <form>
          <mdb-input
            type="text"
            class="text-white"
            placeholder="Search"
            aria-label="Search"
            label
            navInput
            waves
            waves-fixed
          />
        </form>
      </mdb-navbar-toggler> -->
    </mdb-navbar>
    <div style="height: 110vh">
        <slot></slot>
    </div>
  </div>
</template>

<script>
import {
  mdbNavbar,
  mdbNavItem,
  mdbNavbarNav,
  mdbNavbarToggler,
  mdbInput,
  mdbNavbarBrand
} from "mdbvue";
export default {
  name: "NavigationPage",
  components: {
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbInput,
    mdbNavbarBrand
  }
};
</script>
  <style scoped>
.view {
  background: url("https://mdbootstrap.com/img/Photos/Others/img (50).jpg")
    no-repeat center center;
  background-size: cover;
  height: 100%;
}

.navbar .dropdown-menu a:hover {
  color: inherit !important;
}
</style>