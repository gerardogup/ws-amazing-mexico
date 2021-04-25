<template>
  <div>
    <img
      id="mainBanner"
      :src="require(`@/assets/images${this.banner}`)"
      style="z-index: 2000; max-height: 750px"
      class="fixed-top h-100 py-3 mx-auto d-none"
      @click="hideBanner"
    />
  </div>
</template>
<script>
import store from "@/store.js";

export default {
  data() {
    return {
      banner: this.getActiveBanner(),
    };
  },
  methods: {
    getActiveBanner() {
      let bannerPath = null;
      let now = new Date();
      store.website.banners.forEach((banner) => {
        if (banner.fromDate < now && banner.toDate > now) {
          bannerPath = banner.image;
        }
      });

      return bannerPath;
    },
    showBanner() {
      let banner = document.getElementById("mainBanner");
      banner.classList.remove("d-none");
    },
    hideBanner() {
      let banner = document.getElementById("mainBanner");
      banner.classList.add("d-none");
    },
  },
  mounted() {
    this.showBanner();
  },
};
</script>
