<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <img alt="malecón" :src="require(`@/assets/images/puerto-vallarta/destination/malecon-de-puerto-vallarta.jpg`)"> -->
    <section class="header">
      <carousel :content="home.carousel" :calltoaction="true" />
    </section>
    <section class="destinations">
      <div class="container py-5">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="oh-golds mb-4 text-dark-green display-5">
              Destinations
            </h2>
          </div>
        </div>
        <div class="row row-cols-1 row-cols-md-5">
          <div
            class="col"
            v-for="destination in destinations"
            :key="destination.slug"
          >
            <div
              class="card card-destination mb-3"
              :style="`background-image: url('${require(`@/assets/images${destination.image}`)}')`"
            >
              <div class="card-body">
                <h3 class="card-title oh-golds">{{ destination.name }}</h3>

                <router-link :to="destination.slug" class="btn btn-green"
                  >More Info</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="lookingfor bg-aqua">
      <div class="container py-5">
        <div class="row">
          <div class="col text-center px-3 px-sm-5">
            <h2 class="mb-4 oh-golds text-dark-green display-5">
              Looking for Vacation Packages in Mexico
            </h2>
            <p class="px-sm-5">
              At Amazing Mexico our mission is helping you to get an affordable
              and relaxing vacation in the best beach destinations of Mexico. We
              are guarantee you the best prices for Mexican vacation packages on
              the internet. We can beat any vacation package price posted online
              for any major Mexican resorts.
            </p>
            <p class="px-sm-5">
              The staff at Amazing Mexico are specialists committed to provide
              an immediate response to your requests by phone, email, chat or
              social media. We are a BBB certified business. Our representatives
              have wide knowledge of the destinations, resorts and services we
              offer.
            </p>
            <p class="text-dark-green px-sm-5">
              <strong
                >Call us today an allow us to help you to get the best vacation
                of your life</strong
              >
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="map">
      <div class="container py-5">
        <div class="row">
          <div class="col">
            <img
              :src="require(`@/assets/images/home/map.jpg`)"
              class="img-fluid"
              alt="destinations map"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="bestdeals bg-aqua">
      <div class="container py-5">
        <div class="row">
          <div class="col text-center">
            <h2 class="pb-4 oh-golds text-dark-green display-5">Best Deals</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3" v-for="pckg in bestDeals" :key="pckg.name">
            <package-card :package="pckg"></package-card>
          </div>
        </div>
      </div>
    </section>
    <why-to-book></why-to-book>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import store from "@/store.js";
import PackageCard from "@/components/PackageCard.vue";
import Carousel from "@/components/Carousel.vue";
import WhyToBook from "@/components/WhyToBook.vue";

export default {
  data() {
    return {
      home: store.home,
      destinations: store.destinations,
    };
  },
  components: {
    PackageCard,
    Carousel,
    WhyToBook,
  },
  computed: {
    bestDeals() {
      let packages = [];
      store.destinations.forEach((dest) => {
        dest.packages.forEach((pkg) => {
          if (pkg.includeInHome) {
            let _package = {... pkg }
            _package.slug = dest.slug + '/' + pkg.slug;
            _package.destination = dest.name;
            packages.push(_package);
          }
        });
      });
      return packages;
    },
  },
};
</script>

<style scoped>
.card-destination {
  text-align: center;
  min-height: 410px;
  color: white;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.card-destination > .card-body {
  margin-top: 280px;
  background: linear-gradient(rgba(0, 0, 0, 0), #006581);
}
</style>