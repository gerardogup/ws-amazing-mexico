<template>
  <section class="footer py-5">
    <div class="fixed-bottom px-3 py-4 shadow-lg lh-1 d-sm-none bg-blue">
      <a href="tel:+18665015836">
        <small class="fw-bold text-white">ANY DOUBT? CALL TOLL FREE</small>
        <span class="fw-bolder fs-2 d-block text-white">{{ this.phone }}</span>
      </a>
    </div>
    <div class="container pt-3 pt-md-5">
      <div class="row pt-3 pt-md-5">
        <div class="col-md-3 mb-3 lh-lg">
          <router-link class="d-block text-aqua" :to="'/terms-and-conditions'">
            TERMS &amp; CONDITIONS
          </router-link>
          <router-link class="d-block text-aqua" :to="'/privacy-policy'">
            PRIVACY POLICY
          </router-link>
        </div>
        <div class="col-md-4 text-white mb-3">
          <span class="d-block"> P: +1 {{ this.phone }}</span>
          <span class="d-block"> E: reservations@amazing-mexico.com </span>
          <span class="d-block"> W: www.amazing-mexico.com </span>
        </div>
        <div class="col-md-3 text-white mb-3">
          Copyright @ 2021. Amazing Mexico. All Rights Reserved.
          <br />Powered by ePlat.
        </div>
        <div class="col-md-2 text-sm-end">
          <a href="https://www.facebook.com/mexicoisamzing">
            <i class="bi-facebook fs-2 me-3 text-white"></i>
          </a>
          <a href="https://www.instagram.com/mexicois.amazing/">
            <i class="bi-instagram fs-2 me-3 text-white"></i>
          </a>
          <a href="https://twitter.com/MexicoAmazing">
            <i class="bi-twitter fs-2 text-white"></i>
          </a>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-6 mb-3">
          <h6 class="text-green">Affiliations</h6>
          <img
            :src="require('@/assets/images/layout/adeprotur.png')"
            class="me-2"
            style="height: 40px"
            alt="Adeprotur"
          />
          <img
            :src="require('@/assets/images/layout/asudestico.png')"
            style="height: 40px"
            class="me-2"
            alt="Asudestico"
          />
          <img
            :src="require('@/assets/images/layout/bbb.png')"
            style="height: 45px"
            alt="BBB"
          />
        </div>
        <div class="col-md-6 text-sm-end pb-md-1 pb-5">
          <h6 class="text-green">Accepted Credit Cards</h6>
          <img
            :src="require('@/assets/images/layout/major-credit-cards.png')"
            style="height: 35px"
            alt="Credit Cards"
          />
        </div>
      </div>
    </div>
    <img
      src="/svg/gotop.svg"
      class="fixed-right btn-scroll d-none d-md-block"
      @click="scrollToTop()"
    />
  </section>
</template>
<script>
import store from "@/store.js";
export default {
  data() {
    return {
      phone: store.website.phone,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.footer {
  background-image: url("../assets/images/layout/footer.jpg");
  background-size: cover;
}
.btn-scroll {
  width: 70px;
  margin-right: 75px;
  margin-bottom: 17px;
}
</style>