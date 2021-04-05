<template>
  <div>
    <div class="room" v-for="(room,r) in rooms" :key="r">
      <h2 class="oh-golds text-dark-green">{{ room.name }} - ${{ room.priceUSD }}</h2>
      <span v-html="room.description"></span>
      <h3 class="oh-golds text-dark-green mt-5">From our gallery</h3>
      <gallery :content="room.gallery"></gallery>
    </div>
  </div>
</template>
<script>
import Gallery from "@/components/Gallery.vue"
export default {
  props: ["rooms"],
  components: {
    Gallery
  }
};
</script>
