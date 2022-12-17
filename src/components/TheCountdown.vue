<template>
  <div v-if="bannerBarDisplay">
    <div class="d-none d-lg-block">
      <div class="row countdown-banner pb-4">
        <div class="col-5 text-end pt-0 d-flex align-items-center justify-content-end" >
          <img src="../assets/images/home/countdown-banner/lbl04-last.png" alt="" width="300" v-if="blackFriday">
          <img src="../assets/images/cyberweek/lbl01.png" alt="" width="220" v-if="cyberWeek">
        </div>
        <div class="col-4 text-center pt-3">

          <div class="countdown" v-if="countdownDisplay">
            <div v-if="days" class="countdown__block">
              <div class="countdown__digit">{{ days | twoDigits }}<span class="pe-2 ps-2">:</span></div>
              <div class="countdown__text">Days</div>
            </div>
            <div class="countdown__block">
              <div class="countdown__digit">{{ hours | twoDigits }}<span class="pe-2 ps-2">:</span></div>
              <div class="countdown__text">Hrs</div>
            </div>
            <div class="countdown__block">
              <div class="countdown__digit">{{ minutes | twoDigits }}<span class="pe-2 ps-2">:</span></div>
              <div class="countdown__text">Min</div>
            </div>
            <div class="countdown__block">
              <div class="countdown__digit">{{ seconds | twoDigits }}</div>
              <div class="countdown__text">Sec</div>
            </div>
          </div>
        </div>
        <div class="col-3 d-flex">
          <img src="../assets/images/home/countdown-banner/02.png" width="150" alt="" v-if="blackFriday">
          <img src="../assets/images/cyberweek/lbl02.png" width="350" alt=""  v-if="cyberWeek">
        </div>
      </div>
    </div>
    <div class="row countdown-banner mobile pb-3 d-lg-none">
      <div class="col-8 text-center pt-3">
        <div class="countdown" v-if="countdownDisplay">
          <div v-if="days" class="countdown__block">
            <div class="countdown__digit">{{ days | twoDigits }}<span class="pe-2 ps-2">:</span></div>
            <div class="countdown__text">Days</div>
          </div>
          <div class="countdown__block">
            <div class="countdown__digit">{{ hours | twoDigits }}<span class="pe-2 ps-2">:</span></div>
            <div class="countdown__text">Hrs</div>
          </div>
          <div class="countdown__block">
            <div class="countdown__digit">{{ minutes | twoDigits }}<span class="pe-2 ps-2">:</span></div>
            <div class="countdown__text">Min</div>
          </div>
          <div class="countdown__block">
            <div class="countdown__digit">{{ seconds | twoDigits }}</div>
            <div class="countdown__text">Sec</div>
          </div>
        </div>
      </div>
      <div class="col-4 d-flex align-items-center justify-content-center">
        <img src="../assets/images/home/countdown-banner/02.png" width="110" alt="" v-if="blackFriday">
        <img src="../assets/images/cyberweek/lbl01.png" alt="" width="130" v-if="cyberWeek">
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      now: Math.trunc((new Date()).getTime() / 1000),
      today: moment().format('L'),
      event: "",
      finish: false,
      blackFriday: "",
      cyberWeek: "",
      bannerBarDisplay: false,
      countdownDisplay: false
    }
  },
  methods: {
    getCampaignDeadline() {

      if (this.today > "11/01/2022" && this.today < "11/26/2022") {
        this.blackFriday = true
        this.cyberWeek = false
      } else if (this.today > "11/27/2022" && this.today < "12/05/2022") {
        this.blackFriday = false
        this.cyberWeek = true
      }

      if (this.today > "11/23/2022" && this.today < "11/26/2022") {
        this.event = new Date("2022-11-26T00:00:00")
        this.countdownDisplay= true
      } else if (this.today > "12/01/2022" && this.today < "12/05/2022") {
        this.event = new Date("2022-12-05T00:00:00")
        this.countdownDisplay= true
      }


      if (this.today > "11/27/2022" && this.today < "12/05/2022") {
        this.bannerBarDisplay= true
      } else {
        this.bannerBarDisplay= false
      }


    }
  },
  mounted() {
    const _self = this
    window.setInterval(() => {
      this.now = Math.trunc((new Date()).getTime() / 1000)
      if (!this.finish && this.calculatedDate - this.now <= 0) {
        _self.finish = true
        _self.$emit('onFinish')
      }
    }, 1000)
    this.getCampaignDeadline();
  },
  computed: {
    secondCount() {
      return this.calculatedDate - this.now
    },
    calculatedDate() {
      return Math.trunc(Date.parse(this.event) / 1000)
    },
    seconds() {
      if (this.secondCount < 0) return 0
      return this.secondCount % 60
    },
    minutes() {
      if (this.secondCount < 0) return 0
      return Math.trunc(this.secondCount / 60) % 60
    },
    hours() {
      if (this.secondCount < 0) return 0
      return Math.trunc(this.secondCount / 60 / 60) % 24
    },
    days() {
      if (this.secondCount < 0) return 0
      return Math.trunc(this.secondCount / 60 / 60 / 24)
    }
  },
  filters: {
    twoDigits(value) {
      if (value.toString().length <= 1) {
        return '0' + value.toString()
      }
      return value.toString()
    }
  },
  created: function () {
    this.moment = moment;
  },

}
</script>
<style scoped>
.countdown {
  display: flex;
  justify-content: center;
}

.countdown__block {
  text-align: center;
  position: relative;
  font-style: italic;
}

.countdown__block:first-child {
  padding-left: 0;
}

.countdown__block:first-child.countdown__digit:before {
  display: none;
}

.countdown__block:before {
    {
    display: none;
  }
}

.countdown__digit:last-child {
  padding-right: 0;
}

.countdown__text {
  text-transform: uppercase;
  text-align: left;
  margin-bottom: 5px;
}

.countdown__digit {
  font-size: 250%;
  font-weight: bold;
  line-height: 1;
  margin-bottom: 5px;
}

@media (max-width: 768px) {
  .countdown__digit {
    font-size: 200%;
    font-weight: bold;
    line-height: 1;
    margin-bottom: 5px;
  }
}
</style>
  