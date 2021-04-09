<template>
  <div
    class="card card-package"
    :style="`background-image: url('${require(`@/assets/images${ pckg.image }`)}')`"
  >
    <router-link :to="(destinationslug != undefined ? destinationslug + '/' : '') + pckg.slug">
    <img src="/svg/sold-out.svg" class="sold-out" alt="Sold Out" v-if="pckg.soldOut">
    <span class="card-body text-white d-block">
      <span class="fw-bold fs-3">${{ pckg.priceUSD }}</span>
      <h5 class="card-title fw-bolder fs-3 mb-0">{{ pckg.name }}</h5>
      <small class="d-block">{{ pckg.destination }}</small>
      <span class="fw-bold">{{ pckg.plan }}</span>
      <span class="d-block text-aqua">
        {{ pckg.nights + 1 }} days &amp; {{ pckg.nights }} nights
      </span>
    </span>
    </router-link>
  </div>
</template>
<script>
export default {
  props: [ 'package', 'destinationslug', 'destination' ],
  data() {
      return {
          pckg : this.package
      }
  }
};
</script>
<style scoped>
.card-package {
  /* min-height: 405px; */
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 0;
  box-shadow: 0 0 5px #ddd;
  border: 8px solid white;
  background-position: bottom;
}

.card-package .card-body {
  background: linear-gradient(rgba(0, 0, 0, 0) 50%, #006581);
  /* min-height: 405px; */
}

.card-package .card-title {
  margin-top: 200px;
  padding-right: 40px;
}

.sold-out {
  position: absolute;
  margin-top: -35px;
}
</style>