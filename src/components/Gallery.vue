<template>
  <div>
    <div class="row">
      <div class="col-md-3" v-for="(pic, p) in content" :key="p">
        <img
          :src="require('@/assets/images' + pic.url)"
          class="img-fluid mb-3 rounded shadow"
          data-bs-toggle="modal"
          :data-bs-target="'#' + id"
          @click="imageIndex = p"
        />
      </div>
    </div>
    <div
      class="modal fade"
      :id="this.id"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
    >
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <carousel
              :content="content"
              :calltoaction="false"
              :index="imageIndex"
              >></carousel
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Carousel from "@/components/Carousel.vue";
export default {
  props: ["content"],
  name: "gallery",
  data() {
    return {
      imageIndex: 0,
      id: "gallery" + this.randomString(8),
    };
  },
  components: {
    Carousel,
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
