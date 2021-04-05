<template>
  <div>
    <div class="card" v-for="(review, r) in content" :key="r">
      <div class="card-body p-4">
        <span v-html="review.comments" class="d-block mb-3"></span>
        <rating :value="review.rating" />
        <em class="d-block text-dark-green">
            {{ review.author }} from {{review.city}}, {{review.date}}
        </em>
      </div>
    </div>
  </div>
</template>
<script>
import Rating from '@/components/Rating.vue'
export default {
  props: ["content"],
  components: {
      Rating
  }
};
</script>
