<template>
  <div id="app">
    <Navigation />
    <router-view :key="$route.path" />
    <Footer />
  </div>
</template>
<script>
// @ is an alias to /src
import Navigation from "@/components/TheNavigation.vue";
import Footer from "@/components/TheFooter.vue";

export default {
  name: "app",
  components: {
    Navigation,
    Footer,
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,400;0,700;1,400;1,900&display=swap");
@import url("./assets/css/custom.css");
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css");

#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@font-face {
  font-family: "oh_golds_demoregular";
  src: url("/fonts/oh_golds_demo-webfont.woff2") format("woff2"),
    url("/fonts/oh_golds_demo-webfont.woff") format("woff");
}

.oh-golds {
  font-family: "oh_golds_demoregular";
}

@font-face {
  font-family: "trackers";
  src: url("/fonts/Trackers\ demo.otf") format("opentype");
}

.trackers {
  font-family: "trackers";
}

@import "~bootstrap/dist/css/bootstrap.css";
</style>