<template>
  <mdb-col class="contact">
    <mdb-container>
      <mdb-col col="1" class="justify-content-center">
        <mdb-row class="mb-2 mt-2">
          <mdb-col>
            <mdb-tooltip material trigger="hover" :options="{placement: 'right'}">
              <span slot="tip">Pinjate Mašta Beograd</span>

              <a slot="reference" href="https://www.facebook.com/pinjate.masta.beograd/">
                <mdb-icon fab icon="facebook-square" size="3x" />
              </a>
            </mdb-tooltip>
          </mdb-col>
          <mdb-col></mdb-col>
        </mdb-row>
        <mdb-row class="mb-2 mt-2">
          <mdb-col>
            <mdb-tooltip material trigger="hover" :options="{placement: 'right'}">
              <span slot="tip">pinjate.masta.beograd</span>

              <a slot="reference" href="https://www.instagram.com/pinjate.masta.beograd/?hl=en">
                <mdb-icon fab icon="instagram" size="3x" />
              </a>
            </mdb-tooltip>
          </mdb-col>
          <mdb-col></mdb-col>
        </mdb-row>
        <mdb-row class="mb-2 mt-2">
          <mdb-col>
            <mdb-tooltip material trigger="hover" :options="{placement: 'right'}">
              <span slot="tip">064/2461-081</span>
              <a slot="reference" href="tel:+381642461081">
                <mdb-icon icon="phone-square-alt" size="3x" />
              </a>
            </mdb-tooltip>
          </mdb-col>
          <mdb-col></mdb-col>
        </mdb-row>
      </mdb-col>
    </mdb-container>
  </mdb-col>
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
  mdbTooltip,
  mdbNavItem
} from "mdbvue";
export default {
  name: "Contact",
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
    mdbTooltip,
    mdbNavItem
  }
};
</script>

<style>
.contact {
  position: fixed;
  padding: 0.5rem 0;
  top: 300px;
  left: 0;
  /* width: 15%; */
  max-width: 5.5rem;
  z-index: 10;
  /* background: #fff; */
  border-radius: 0 4px 4px 0;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}
</style>