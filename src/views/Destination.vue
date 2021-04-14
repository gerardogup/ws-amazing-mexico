<template>
  <div>
    <carousel :content="destination.carousel" :calltoaction="true" />
    <section class="destination pt-3 pt-md-5">
      <div class="container">
        <div class="row">
          <div class="col-md-8 mb-3 mb-md-5">
            <ul class="nav nav-pills nav-fill bg-turquoise p-3 rounded">
              <li class="nav-item">
                <a
                  class="nav-link"
                  :class="{ active: tab == 0 }"
                  @click="tab = 0"
                  >About</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  :class="{ active: tab == 1 }"
                  @click="tab = 1"
                  >Activities</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  :class="{ active: tab == 2 }"
                  @click="tab = 2"
                  >Direct Flights</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  :class="{ active: tab == 3 }"
                  @click="tab = 3"
                  >Weather/Seasons</a
                >
              </li>
            </ul>
            <div class="pt-5 px-2 px-md-0">
              <div v-show="tab === 0">
                <h1 class="pb-4 oh-golds text-dark-green display-5">
                  {{ destination.name }}
                </h1>
                <span v-html="destination.description"></span>
              </div>
              <div v-show="tab === 1">
                <h1 class="pb-4 oh-golds text-dark-green display-5">
                  What to do in {{ destination.name }}
                </h1>
                <span v-html="destination.activities.description"></span>
                <carousel
                  :content="destination.activities.gallery"
                  :calltoaction="false"
                ></carousel>
              </div>
              <div v-show="tab === 2">
                <h1 class="pb-4 oh-golds text-dark-green display-5">
                  Direct Flights
                </h1>
                <table class="table">
                  <thead class="bg-dark-green">
                    <tr>
                      <th class="align-middle">City</th>
                      <th class="align-middle text-center">
                        Direct flights per day
                      </th>
                      <th class="align-middle">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(flight, f) in destination.flights" :key="f">
                      <td>{{ flight.city }}</td>
                      <td class="text-center">{{ flight.flightsPerDay }}</td>
                      <td>{{ flight.time }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div v-show="tab === 3">
                <h1 class="pb-4 oh-golds text-dark-green display-5">
                  Weather / Seasons
                </h1>
                <span v-html="destination.weather.description"></span>
                <div class="row mt-4">
                  <div
                    class="col-6 mb-4"
                    v-for="(season, s) in destination.weather.seasons"
                    :key="s"
                  >
                    <div class="card card-season">
                      <div class="card-header bg-dark-green text-center">
                        {{ season.name }}
                      </div>
                      <div class="card-body text-center">
                        <img :src="season.image" :alt="season.name" />
                        <h3 class="mt-3">{{ season.temperature }}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-5 d-none d-md-block">
            <free-vacation />
          </div>
        </div>
      </div>
    </section>
    <section id="bestdeals" class="bg-aqua">
      <div class="container py-4 py-md-5">
        <div class="row">
          <div class="col text-center">
            <h2 class="pb-2 pb-md-4 oh-golds text-dark-green display-5">Best Deals</h2>
          </div>
        </div>
        <div class="row">
          <div
            class="col-md-3 mb-3"
            v-for="pckg in destination.packages"
            :key="pckg.name"
          >
            <package-card
              :package="pckg"
              :destinationslug="destination.slug"
            ></package-card>
          </div>
        </div>
      </div>
    </section>
    <section class="ratio ratio-16x9">
      <iframe
        class=""
        :src="destination.video"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </section>
    <free-vacation class="d-block d-sm-none mt-3" />
    <why-to-book />
  </div>
</template>
<script>
import store from "@/store.js";
import Carousel from "@/components/Carousel.vue";
import WhyToBook from "@/components/WhyToBook.vue";
import PackageCard from "@/components/PackageCard.vue";
import FreeVacation from "@/components/FreeVacation.vue";

export default {
  name: "Destination",
  components: {
    Carousel,
    WhyToBook,
    PackageCard,
    FreeVacation,
  },
  data() {
    return {
      tab: 0,
    };
  },
  props: {
    slug: {
      type: String,
      required: true,
    },
  },
  computed: {
    destination() {
      return store.destinations.find(
        (destination) => destination.slug === this.slug
      );
    },
  },
};
</script>
<style scoped>
.card-season .card-body {
  min-height: 175px;
}
</style>