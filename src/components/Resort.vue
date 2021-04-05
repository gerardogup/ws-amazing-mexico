<template>
  <div>
    <h2 class="oh-golds text-dark-green">The Resort</h2>
    <span v-html="rst.description"></span>
    <table class="table bg-aqua">
      <tbody>
        <tr v-for="(ft, f) in rst.features" :key="f">
          <td style="width: 180px" class="p-3">
            {{ ft.feature }}
          </td>
          <td class="p-3">
            <span v-html="ft.description"></span>
          </td>
        </tr>
      </tbody>
    </table>
    <h3 class="oh-golds text-dark-green mt-5">From our gallery</h3>
    <gallery :content="rst.gallery"></gallery>
  </div>
</template>
<script>
import Carousel from "@/components/Carousel.vue";
import Gallery from "@/components/Gallery.vue";
export default {
  props: ["rst"],
  components: {
      Carousel,
      Gallery
  }
};
</script>
