<template>
  <div
    class="card card-package"
    :style="`background-image: url('${require(`@/assets/images${pckg.image}`)}')`"
  >
    <router-link
      :to="
        (destinationslug != undefined ? destinationslug + '/' : '') + pckg.slug
      "
    >
      <img
        src="/svg/sold-out.svg"
        class="sold-out"
        alt="Sold Out"
        v-if="pckg.soldOut"
      />
      <span class="card-body text-white d-block">
        <span class="fw-bold fs-3">${{ pckg.priceUSD }}</span>
        <span class="card-title">
          <h5 class="fw-bolder fs-3 d-inline">{{ pckg.name }}</h5>
        </span>
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
  props: ["package", "destinationslug", "destination"],
  data() {
    return {
      pckg: this.package,
    };
  },
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
  display: table-cell;
  vertical-align: bottom;
  padding-top: 200px;
  height: 270px;
}

.sold-out {
  position: absolute;
  margin-top: -5px;
}
</style>