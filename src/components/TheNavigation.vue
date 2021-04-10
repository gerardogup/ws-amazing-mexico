<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-light bg-white shadow border-bottom"
      style="z-index: 1020"
    >
      <div class="container bg-white">
        <router-link class="navbar-brand" to="/">
          <img
            :src="require('@/assets/images/layout/logo.svg')"
            style="width: 95px"
            alt="Amazing Mexico"
          />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mx-auto" @click="collapseMenu()">
            <li
              v-for="destination in destinations"
              :key="destination.name"
              class="text-center border-bottom"
            >
              <router-link
                class="nav-link"
                :to="{
                  name: 'Destination',
                  params: { slug: destination.slug },
                }"
              >
                {{ destination.name }}
              </router-link>
            </li>
            <li class="nav-item text-center border-bottom">
              <a class="nav-link" href="https://blog.amazing-mexico.com"
                >Blog</a
              >
            </li>
            <li class="nav-item text-center border-bottom">
              <router-link class="nav-link" to="/faq">FAQs</router-link>
            </li>
            <li class="nav-item fw-bold text-center border-bottom">
              <a
                class="nav-link"
                data-bs-toggle="modal"
                data-bs-target="#quoteRequestModal"
              >
                Request a Quote
              </a>
            </li>
          </ul>
          <span class="navbar-text lh-1 text-end d-none d-md-block">
            <a href="tel:+18665015836">
              <small class="text-dark-green">ANY DOUBT? CALL TOLL FREE</small>
              <span class="fw-bolder fs-2 d-block text-green"
                >1 866 501 5836</span
              >
            </a>
          </span>
        </div>
      </div>
    </nav>
    <!-- Modal -->
    <div
      class="modal fade"
      id="quoteRequestModal"
      tabindex="-1"
      aria-labelledby="quoteRequestModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header pb-1">
            <h3
              class="modal-title oh-golds text-dark-green"
              id="quoteRequestModalLabel"
            >
              Request a Quote
            </h3>
            <button
              type="button"
              class="btn-close mb-2"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <quote-request />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import store from "@/store.js";
import QuoteRequest from '@/components/QuoteRequest.vue'

export default {
  data() {
    return {
      destinations: store.destinations,
    };
  },
  components: {
    QuoteRequest
  },
  methods: {
    collapseMenu() {
      let menu = document.getElementsByClassName("navbar-toggler")[0];
      menu.click();
    },
  },
};
</script>
