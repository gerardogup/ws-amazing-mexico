<template>
  <div
    :id="this.id"
    class="carousel slide carousel-fade"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        :id="id + i"
        type="button"
        v-for="(item, i) in carousel"
        :key="i"
        :data-bs-target="'#' + id"
        :data-bs-slide-to="i"
        :class="{ 'active' : i == 0 }"
      ></button>
    </div>
    <div class="carousel-inner">
      <div
        class="carousel-item"
        v-for="(item, i) in carousel"
        :key="item.url"
        :class="{ active: i == 0 }"
      >
        <img
          :src="require(`@/assets/images${item.url}`)"
          class="d-block w-100"
          :alt="item.alt"
        />
        <div class="carousel-caption d-none d-md-block">
          <div class="display-1 oh-golds text-shadow">{{ item.text }}</div>
          <img
            :src="require('@/assets/images/layout/call-now.svg')"
            v-if="calltoaction"
            style="width: 600px"
          />
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      :data-bs-target="'#' + this.id"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      :data-bs-target="'#' + this.id"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<script>
export default {
  props: ["content", "calltoaction", "index"],
  data() {
    return {
      carousel: this.content,
      id: "carouselFade" + this.randomString(8),
    };
  },
  watch: {
    index(newVal) {
      let indicator = document.getElementById(this.id+newVal);
      const e = new Event("click");
      indicator.dispatchEvent(e);
    },
  },
  methods: {
    randomString(length) {
      const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".split(
        ""
      );

      if (!length) {
        length = Math.floor(Math.random() * chars.length);
      }

      var str = "";
      for (var i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
      }
      return str;
    },
  },
};
</script>
