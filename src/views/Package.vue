<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-8"></div>
        <div class="col-md-4">
          <div class="spot d-none d-sm-block">
            <h2 class="fw-bold">{{ pkg.name }}</h2>
            <span class="d-block"
              >{{ pkg.nights + 1 }} days &amp; {{ pkg.nights }} nights</span
            >
            <span class="d-block"
              >{{ pkg.adults }} adults &amp; {{ pkg.children }} children</span
            >
            <span class="d-block">{{ pkg.plan }}</span>
            <span class="d-block my-2">
              <span class="display-4 fw-bolder d-inline-block"
                >${{ pkg.priceUSD }}</span
              >
              <span
                class="d-inline-block lh-1 text-dark-green text-start ms-2 fw-bold"
              >
                <small>RETAIL PRICE</small>
                <br /><span class="retail-price"
                  >${{ pkg.retailPriceUSD }}</span
                >
                <br />SAVINGS {{ pkg.savings }}
              </span>
            </span>
            <small class="d-block"
              >*Package Price. Not per person. Not per night.</small
            >
            <span class="mt-3 d-block h4 fw-bold text-dark-green"
              >Worry Free Booking</span
            >
            <span class="text-dark-green">
              Book Now, decide dates later.<br />
              No fees to modifying dates.
            </span>
          </div>
        </div>
      </div>
    </div>

    <carousel :content="pkg.headers" />

    <section class="package-details d-sm-none">
      <div class="row mt-3 px-2">
        <div class="col text-center text-blue">
          <h2 class="fw-bold">{{ pkg.name }}</h2>
          <span class="d-block"
            >{{ pkg.nights + 1 }} days &amp; {{ pkg.nights }} nights</span
          >
          <span class="d-block"
            >{{ pkg.adults }} adults &amp; {{ pkg.children }} children</span
          >
          <span class="d-block">{{ pkg.plan }}</span>
          <span class="d-block my-2">
            <span class="display-md-4 display-1 align-top fw-bolder d-inline-block"
              >${{ pkg.priceUSD }}</span
            >
            <span
              class="d-inline-block lh-1 text-dark-green text-start ms-2 fw-bold"
            >
              <small>RETAIL PRICE</small>
              <br /><span class="retail-price">${{ pkg.retailPriceUSD }}</span>
              <br />SAVINGS {{ pkg.savings }}
            </span>
          </span>
          <small class="d-block"
            >*Package Price. Not per person. Not per night.</small
          >
          <span class="mt-3 d-block h4 fw-bold text-dark-green"
            >Worry Free Booking</span
          >
          <span class="text-dark-green">
            Book Now, decide dates later.<br />
            Free Cancellation before
          </span>
        </div>
      </div>
    </section>

    <section class="details py-3 py-md-5">
      <div class="container">
        <div class="row">
          <div class="col col-md-8 mb-3 mb-md-5">
            <ul class="nav nav-pills nav-fill bg-turquoise p-3 rounded mb-4">
              <li class="nav-item">
                <a
                  class="nav-link"
                  :class="{ active: tab == 0 }"
                  @click="tab = 0"
                  >Offer</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  :class="{ active: tab == 1 }"
                  @click="tab = 1"
                  >The Resort</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  :class="{ active: tab == 2 }"
                  @click="tab = 2"
                  >Your Room</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  :class="{ active: tab == 3 }"
                  @click="tab = 3"
                  >Amenities</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  :class="{ active: tab == 4 }"
                  @click="tab = 4"
                  >Map</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  :class="{ active: tab == 5 }"
                  @click="tab = 5"
                  >Reviews</a
                >
              </li>
            </ul>
            <div v-show="tab === 0">
              <offer :pkg="pkg" />
            </div>
            <div v-show="tab === 1">
              <resort :rst="pkg.resort" />
            </div>
            <div v-show="tab === 2">
              <room :rooms="pkg.rooms" />
            </div>
            <div v-show="tab === 3">
              <amenities :content="pkg.amenities" />
            </div>
            <div v-show="tab === 4">
              <location :content="pkg.location" />
            </div>
            <div v-show="tab === 5">
              <reviews :content="pkg.reviews" />
            </div>
          </div>
          <div class="col col-md-4 mb-5">
            <div class="bg-blue rounded-top text-white pt-4 px-4 pb-3 lh-1">
              <div class="h2 fw-bold mb-0">Call Now!</div>
              <div>
                <span class="h3">Book Today</span><br />
                Decide travel dates later
                <div class="h2">+1 866 883 0573</div>
              </div>
            </div>
            <div class="bg-turquoise px-4 py-4" v-if="this.otherPackage">
              More packages in {{ destination.name }}
              <div class="row mt-3">
                <div class="col-12">
                  <package-card :package="otherPackage"></package-card>

                  <router-link
                    :to="{
                      name: 'Destination',
                      params: { slug: destination.slug },
                      hash: '#bestdeals',
                    }"
                  >
                    <button
                      type="button"
                      class="btn btn-green mx-auto d-block mt-3"
                    >
                      More Packages
                    </button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import store from "@/store.js";
import Carousel from "@/components/Carousel.vue";
import Offer from "@/components/Offer.vue";
import Resort from "@/components/Resort.vue";
import Room from "@/components/Room.vue";
import Amenities from "@/components/Amenities.vue";
import Location from "@/components/Location.vue";
import Reviews from "@/components/Reviews.vue";
import PackageCard from "@/components/PackageCard.vue";

export default {
  name: "Package",
  data() {
    return {
      tab: 0,
    };
  },
  props: ["destinationslug", "slug"],
  components: {
    Carousel,
    Offer,
    Resort,
    Room,
    Amenities,
    Location,
    Reviews,
    PackageCard,
  },
  computed: {
    otherPackage() {
      let index = 0;
      this.destination.packages.forEach((pack, p) => {
        if (pack.name == this.pkg.name) {
          index = p + 1;
        }
      });
      if (index == this.destination.packages.length) {
        index = 0;
      }
      return this.destination.packages[index];
    },
    destination() {
      return store.destinations.find(
        (destination) => destination.slug == this.destinationslug
      );
    },
    pkg() {
      return this.destination.packages.find((pckg) => pckg.slug == this.slug);
    },
  },
};
</script>
<style scoped>
.spot {
  background-image: url("../assets/images/layout/spot-3.png");
  background-size: cover;
  background-position: bottom;
  position: absolute;
  z-index: 1100;
  padding: 20px 50px 160px;
  text-align: center;
  color: #02bfd0;
  max-width: 450px;
}

.retail-price {
  text-decoration: line-through;
}
</style>
