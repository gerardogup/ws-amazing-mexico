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
              At Amazing Mexico our mission is to help you get an affordable and
              relaxing vacation in any of our five destinations and best Mexican
              beaches. We guarantee the best price for a Mexican vacation
              package on the market.
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
    <div
      class="modal fade"
      id="bannerModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body modal-banner-body text-center">
            <button
              type="button"
              class="btn btn-close-banner"
              data-bs-dismiss="modal"
              aria-label="Close"
            >X</button>
            <a href="tel: 866-883-0573">
            <img src="../assets/images/xmas/btn-get.png" alt="" class="btn-book">
          </a>
          </div>
        </div>
      </div>
      </div>
    <div
      class="modal fade"
      id="myModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
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
          <div class="modal-body wheel text-center">
            <img src="../assets/images/world-fifa/wheel/lbl01.png" alt="" class="img-fluid p-lg-5 p-1 pt-3">
            <canvas id="canvas" width="434" height="434" class="">
              <!--height="448"-->
              <p
                style="
                   {
                    color: white;
                  }
                "align="center"
              >
                Sorry, your browser doesn't support canvas. Please try another.
              </p>
            </canvas>
            <img id="prizePointer" src="../assets/images/world-fifa/wheel/pointer.png" alt="V" width="80"/>
            <br />
            <img
              id="spin_button"
              src="../assets/images/world-fifa/wheel/spin-btn.png"
              class="w-25 pb-3 pt-3 img-fluid"
              alt="Spin"
              @click="startSpin()"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="prizeModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
   
      <div class="modal-dialog  modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn"
              data-bs-dismiss="modal"
              aria-label="Close"
            >X</button>
          </div>
          <div class="modal-body text-center)">
            <img src="@/assets/images/world-fifa/prizes/lbl02.png" alt="" class="img-fluid ps-5 pe-5 pt-5">
            <img :src="prize" alt="" class="img-fluid ps-5 pe-5">
            <a href="tel:+1866 883 0573">
              <img
                id="call-btn"
                src="@/assets/images/world-fifa/prizes/get-btn.png"
                class="pt-3 call-btn w-50 pb-lg-5"
                alt="Spin"
              />
              
            
              <p class="text-dark p-lg-0 p-1 lbl-prize mt-3 pt-5">
                Does not apply with other promotions. Valid with the purchase of a
           Vacation Package to Mexico. <br> *Only with the purchase of a $599
           package.
              </p>
          
            </a>
          </div>
        </div>
      </div>
      <!-- <audio id="music" controls autoplay muted>
  <source src="../assets/audio/AM_Gift_2022.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
  </audio>
  <button id="playSound" @click="startAudio()" >PLAY</button> -->
    </div>

  </div>

</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import store from "@/store.js";
import PackageCard from "@/components/PackageCard.vue";
import Carousel from "@/components/Carousel.vue";
import WhyToBook from "@/components/WhyToBook.vue";
import * as wheel from "@/Winwheel.js";
// const winWheel = require('@/WinWwheel')
export default {
  data() {
    return {
      home: store.home,
      destinations: store.destinations,
      modal: null,
      prizeModal: null,
      theWheel: null,
      loadedImg: null,
      wheelSpinning: false,
      wheelPower: 0,
      prize: require('@/assets/images/world-fifa/prizes/01.png'),
      loadedImg: new Image(),
      fromDate: new Date(2022, 11, 18, 0, 0, 0),
      toDate: new Date(2022, 11, 24, 23, 59, 59),
      wheel: {
      fromDate: new Date(2022, 11, 17, 0, 0, 0),
      toDate: new Date(2022, 11, 17, 23, 59, 59),
      },
      modalWheel: '',
      now: new Date()
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
            let _package = { ...pkg };
            _package.slug = dest.slug + "/" + pkg.slug;
            _package.destination = dest.name;
            packages.push(_package);
          }
        });
      });
      return packages;
    },
  },
  methods: {
    newWheel() {
      // Create new wheel object specifying the parameters at creation time.
       
      this.theWheel = new wheel.Winwheel({
        'numSegments'       : 10,            // Specify number of segments.
                'outerRadius'       : 180,          // Set outer radius so wheel fits inside the background.
                'drawMode'          : 'image',      // drawMode must be set to image.
                'drawText'          : true,         // Need to set this true if want code-drawn text on image wheels.
                'textFontSize'      : 0,
                'responsive'   : true, 
                  
                'textOrientation'   : 'curved',     // Note use of curved text.
                'textDirection'     : 'reversed',   // Set other text options as desired.
                'textAlignment'     : 'outer',
                'textMargin'        : 5,
                'textFontFamily'    : 'monospace',
                'textStrokeStyle'   : 'rgba(0, 0, 0, 0)',
                'textLineWidth'     : 2,
                'textFillStyle'     : 'rgba(0, 0, 0, 0)',
                'segments'     :            // Define segments.
                [
                   {'text' : '1'},
                   {'text' : '2'},
                   {'text' : '3'},
                   {'text' : '4'},
                   {'text' : '5'},
                   {'text' : '6'},
                   {'text' : '7'},
                   {'text' : '8'},
                   {'text' : '9'},
                   {'text' : '10'}
                ],
                'animation' :                   // Specify the animation to use.
                {
                    'type'     : 'spinToStop',
                    'duration' : 5,             // Duration in seconds.
                    'spins'    : 8,             // Number of complete spins.
                    'callbackFinished' : this.alertPrize
                },
               
            });

            
            

             // Make wheelImage equal the loaded image object.
                 
                                 // Also call draw function to render the wheel.
       
 
            // Set the image source, once complete this will trigger the onLoad callback (above).
            
            
      // Vars used by the code in this page to do power controls.

      // -------------------------------------------------------
      // Function to handle the onClick on the power buttons.
      // -------------------------------------------------------
    },
    loadImg(){
      this.theWheel.wheelImage = this.loadedImg;   
      this.loadedImg.src = require("../assets/images/world-fifa/wheel/wheel.png");
      this.theWheel.draw(); 
 
    },
    startSpin() {
      // Ensure that spinning can't be clicked again while already running.
      if (this.wheelSpinning == false) {
        // Based on the power level selected adjust the number of spins for the wheel, the more times is has
        // to rotate with the duration of the animation the quicker the wheel spins.
        if (this.wheelPower == 1) {
          this.theWheel.animation.spins = 2;
        } else if (this.wheelPower == 2) {
          this.theWheel.animation.spins = 5;
        } else if (this.wheelPower == 3) {
          this.theWheel.animation.spins = 8;
        }

        // Disable the spin button so can't click again while wheel is spinning.
        // document.getElementById('spin_button').src       = "spin_off.png";
        // document.getElementById('spin_button').className = "";

        // Begin the spin animation by calling startAnimation on the wheel object.
        this.theWheel.startAnimation();

        // Set to true so that power can't be changed and spin button re-enabled during
        // the current animation. The user will have to reset before spinning again.
        this.wheelSpinning = true;
      }
    },
    alertPrize(indicatedSegment) {
      // Do basic alert of the segment text. You would probably want to do something more interesting with this information.
      // alert("The wheel stopped on " + indicatedSegment.text);
      switch (indicatedSegment.text) {
        case "1":
          this.prize = require('@/assets/images/world-fifa/prizes/01.png');
          break;
        case "2":      
          this.prize = require('@/assets/images/world-fifa/prizes/02.png');
          break;
        case "3":
          this.prize = require('@/assets/images/world-fifa/prizes/03.png');
          break;
        case "4":
          this.prize = require('@/assets/images/world-fifa/prizes/04.png');
          break;
        case "5":
          this.prize = require('@/assets/images/world-fifa/prizes/05.png');
          break;
        case "6":
          this.prize = require('@/assets/images/world-fifa/prizes/06.png');
          break;
        case "7":
          this.prize = require('@/assets/images/world-fifa/prizes/07.png');
          break;
        case "8":
          this.prize = require('@/assets/images/world-fifa/prizes/08.png');
          break;
        case "9":
          this.prize = require('@/assets/images/world-fifa/prizes/09.png');
          break;
        case "10":
          this.prize = require('@/assets/images/world-fifa/prizes/10.png');          
          break;
        default:
          console.log(`Sorry, we are out of`);
      }
      this.modal.hide();
      const prizeModal = document.querySelector("#prizeModal");
      this.prizeModal = new bootstrap.Modal(prizeModal);
      this.prizeModal.handleUpdate()
      this.prizeModal.show();
      // this.modalPrizeSelected();
    },

    modalPrizeSelected() {
      const prizeModal = document.querySelector(this.prize);
      this.prizeModal = new bootstrap.Modal(prizeModal);
      this.prizeModal.handleUpdate()
      this.modal.hide();
      this.prizeModal.show();
    },
    startAudio() {
        var mySound= document.getElementById("music");
        console.log("le dio")
        mySound.play();
      },
  },
  mounted() {
    this.newWheel();
  //bannerModal
    const myModal = document.querySelector("#bannerModal");
    const modalWheel = document.querySelector("#myModal");
    this.loadImg() 
    this.modal = new bootstrap.Modal(myModal);
    this.modalWheel = new bootstrap.Modal(modalWheel);
    if (this.fromDate < this.now && this.toDate > this.now) {
      this.modal.show()
      }
      if (this.wheel.fromDate < this.now && this.wheel.toDate > this.now) {
       this.modalWheel.show()
      }
    // this.modalPrizeSelected()
    // document.getElementById('playSound').click();
  }
};
</script>

<style scoped>
.modal-body {
    background-image: url(../assets/images/world-fifa/wheel/back01.png);
    background-repeat: no-repeat;
    background-size: 126%;
    background-position: center;
    height: auto;
    padding-top: 20%
}.modal-banner-body {
    background-image: url(../assets/images/xmas/AM_Banner.webp);
    background-repeat: no-repeat;
    background-size: 126%;
    background-position: center;
    height: auto;
    padding-top: 20%
}
.modal-body h2 {
  color: white;
  font-weight: bold;
}
.modal-body {
  text-align: center;
  padding: 0 !important;
}
#call-btn {
  width: 40%;
  cursor: pointer;
}
@media (max-width: 768px) {
#spin_button{
  width: 50% !important;
  position: absolute;
    bottom: -10px;
    left: 96px;
}

}
.prize-title {
  padding-top: 70%;
}
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
.modal-header {
  background-color: #d5d5d5;
}

.modal-prize {
  background-image: url(../assets/images/xmas/AM_Banner.webp);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: auto;
    padding-top: 20%
}

.banner-modal {
  background-image: url(../assets/images/world-fifa/wheel/back01.png);
  background-size: cover;
}

.btn-book {
    width: 242px;
    padding-top: 641px;
    padding-bottom: 42px;
}

.btn-close {
  position: absolute!important;
  left: 93%!important;
}

.btn-close-banner {
  position: absolute!important;
  left: 93%!important;
  color: white;
  font-weight: bold;
}

@media (max-width: 576px) { 
  .btn-book {
    width: 242px;
    padding-top: 468px;
    padding-bottom: 42px;
}
 }
</style>