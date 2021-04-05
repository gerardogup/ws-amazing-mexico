<template>
  <section class="footer py-5">
    <div class="container pt-5">
      <div class="row pt-5">
        <div class="col-md-3">
          <router-link class="d-block text-aqua" :to="'/terms-and-conditions'">
            TERMS &amp; CONDITIONS
          </router-link>
          <router-link class="d-block text-aqua" :to="'/privacy-policy'">
            PRIVACY POLICY
          </router-link>
        </div>
        <div class="col-md-4 text-white">
          <span class="d-block"> P: +1 866 883 0573</span>
          <span class="d-block"> E: reservations@amazing-mexico.com </span>
          <span class="d-block"> W: www.amazing-mexico.com </span>
        </div>
        <div class="col-md-3 text-white">
          Copyright @ 2021. Amazing Mexico. All Rights Reserved.
        </div>
        <div class="col-md-2 text-end">
          <a href="https://www.facebook.com/mexicoisamzing">
            <i class="bi-facebook fs-2 me-3 text-white"></i>
          </a>
          <a href="https://www.instagram.com/mexicois.amazing/">
            <i class="bi-instagram fs-2 text-white"></i>
          </a>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-6">
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
        <div class="col-md-6 text-end">
          <h6 class="text-green">Accepted Credit Cards</h6>
<img :src="require('@/assets/images/layout/major-credit-cards.png')" style="height: 35px;" alt="Credit Cards">
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.footer {
  background-image: url("../assets/images/layout/footer.jpg");
  background-size: cover;
}
</style>