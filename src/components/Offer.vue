<template>
  <div>
    <h1 class="oh-golds text-dark-green">{{ pkg.name }}</h1>

    <rating :value="pkg.offer.rating" />

    <ul class="mt-3">
      <li v-for="(inc, i) in pkg.offer.includes" :key="i">{{ inc }}</li>
    </ul>
    
    <span v-html="pkg.offer.description"></span>
  </div>
</template>
<script>
import Rating from '@/components/Rating.vue'
export default {
  props: ["pkg"],
  components: {
    Rating
  }
};
</script>
