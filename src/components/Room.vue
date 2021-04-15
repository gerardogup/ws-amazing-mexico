<template>
  <div>
    <div class="room" v-for="(room, r) in rooms" :key="r">
      <span class="float-end text-end">
        <span class="h2 fw-bold text-blue">${{ room.priceUSD }}</span>
        <small class="d-block" v-if="room.nights"
          >{{ room.nights + 1 }} days &amp; {{ room.nights }} nights</small
        >
      </span>

      <h2 class="oh-golds text-dark-green">{{ room.name }}</h2>
      <span v-html="room.description"></span>
      <h3 class="oh-golds text-dark-green mt-4 mt-md-5">From our gallery</h3>
      <gallery :content="room.gallery"></gallery>
    </div>
  </div>
</template>
<script>
import Gallery from "@/components/Gallery.vue";
export default {
  props: ["rooms"],
  components: {
    Gallery,
  },
};
</script>
