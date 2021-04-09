<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div class="container bg-white" style="z-index: 1100">
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
          <ul class="navbar-nav mx-auto">
            <li v-for="destination in destinations" :key="destination.name">
              <router-link class="nav-link" :to="{
                name: 'Destination',
                params: { slug: destination.slug }
              }">
                {{ destination.name }}
              </router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://blog.amazing-mexico.com"
                >Blog</a
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/faq">FAQs</router-link>
            </li>
            <li class="nav-item fw-bold">
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
  </div>
</template>
<script>
import store from "@/store.js";

export default {
  data() {
    return {
      destinations: store.destinations,
    };
  },
};
</script>
