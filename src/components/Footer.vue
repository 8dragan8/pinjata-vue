<template>
  <!-- Footer -->
  <mdb-footer class="font-small pt-0">
    <mdb-container>
      <mdb-row>
        <mdb-col md="12">
          <mdb-row>
            <mdb-col md="2">
              <a href="https://www.facebook.com/pinjate.masta.beograd/">
                <p><mdb-icon fab icon="facebook-square" size="3x" />Telephone</p>
              </a>
            </mdb-col>
            <mdb-col md="2">
              <a href="https://www.instagram.com/pinjate.masta.beograd/?hl=en">
                <p><mdb-icon fab icon="instagram" size="3x" />Telephone</p>
              </a>
            </mdb-col>
            <mdb-col md="2">
              <a href="https://www.instagram.com/pinjate.masta.beograd/?hl=en">
                <p><mdb-icon  icon="phone-square-alt" size="3x" />Telephone</p>
              </a>
            </mdb-col>
          </mdb-row>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <div class="footer-copyright text-center py-3">
      <mdb-container fluid>
        &copy; 2020 Copyright:
        <a href="https://www.MDBootstrap.com">MDBootstrap.com</a>
      </mdb-container>
    </div>
  </mdb-footer>
</template>

<script>
import { mdbIcon, mdbFooter, mdbContainer, mdbRow, mdbCol } from "mdbvue";
export default {
  name: "FooterPage",
  components: {
    mdbFooter,
    mdbContainer,
    mdbRow,
    mdbIcon,
    mdbCol
  }
};
</script>

<style>
.icon {
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>