<template>
  <div>
    <form
      method="post"
      @submit="saveRequest"
      id="requestForm"
      novalidate
      class="needs-validation"
      v-show="!saved"
    >
      <h4>Would you like to receive a quote?</h4>
      <p>
        Maybe number of guests or number of nights you want to travel, don't
        match with our standard packages. Don't worry, you can fill the next
        form to request a quote according to your needs.
      </p>
      <p>
        Please enter your information and one of our reservations specialists
        will contact you by phone or email to bring you a customized quote.
      </p>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label class="form-label">First Name</label>
          <input
            class="form-control"
            type="text"
            v-model="form.firstName"
            required
          />
          <span class="form-text invalid-feedback"
            >Please provide your first name</span
          >
        </div>
        <div class="col-md-6 mb-3">
          <label class="form-label">Last Name</label>
          <input
            class="form-control"
            type="text"
            v-model="form.lastName"
            required
          />
          <span class="form-text invalid-feedback"
            >Please provide your last name</span
          >
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label class="form-label">Email</label>
          <input
            class="form-control"
            type="email"
            v-model="form.email"
            required
          />
          <span class="form-text invalid-feedback"
            >Provide your email addrees where you would like to receive your
            quote</span
          >
        </div>
        <div class="col-md-6 mb-3">
          <label class="form-label">Phone</label>
          <input
            class="form-control"
            type="text"
            v-model="form.phone"
            required
            maxlength="10"
          />
          <span class="form-text invalid-feedback"
            >Please provide your phone number</span
          >
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label class="form-label">Time to be reached</label>
          <input class="form-control" type="text" v-model="form.timeToReach" />
        </div>
        <div class="col-md-6 mb-3">
          <label class="form-label">Destination</label>
          <select class="form-control" v-model="form.destination" required>
            <option value="Puerto Vallarta">Puerto Vallarta</option>
            <option value="Cabo San Lucas">Cabo San Lucas</option>
            <option value="Loreto">Loreto</option>
            <option value="Cancun">Cancun</option>
            <option value="Riviera Maya">Riviera Maya</option>
          </select>
          <span class="form-text invalid-feedback"
            >Please provide your desired destination</span
          >
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label class="form-label">Arrival Date</label>
          <input
            class="form-control"
            type="date"
            v-model="form.arrivalDate"
            required
          />
          <span class="form-text invalid-feedback"
            >In order to bring you a better offer, please provider arrival
            date</span
          >
        </div>
        <div class="col-md-6 mb-3">
          <label class="form-label">Departure Date</label>
          <input
            class="form-control"
            type="date"
            v-model="form.departureDate"
            required
          />
          <span class="form-text invalid-feedback"
            >Please provide your departure date</span
          >
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label class="form-label">Number of Adults</label>
          <input class="form-control" type="number" v-model="form.adults" />
          <span class="form-text invalid-feedback"
            >Please provide number of adults</span
          >
        </div>
        <div class="col-md-6 mb-3">
          <label class="form-label">Number of Children</label>
          <input class="form-control" type="number" v-model="form.children" />
          <span class="form-text invalid-feedback"
            >Please provide number of children</span
          >
        </div>
      </div>
      <div class="row row-cols-5">
        <div class="col mb-2" v-for="(child, c) in childrenAges" :key="c">
          <label class="form-label">Child {{ c + 1 }}</label>
          <select v-model="child.age" class="form-control">
            <option value="0">less than a year</option>
            <option value="1">1 year old</option>
            <option value="2">2 years old</option>
            <option value="3">3 years old</option>
            <option value="4">4 years old</option>
            <option value="5">5 years old</option>
            <option value="6">6 years old</option>
            <option value="7">7 years old</option>
            <option value="8">8 years old</option>
            <option value="9">9 years old</option>
            <option value="10">10 years old</option>
            <option value="11">11 years old</option>
            <option value="12">12 years old</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-12 mb-3">
          <label class="form-label">Comments</label>
          <textarea
            class="form-control"
            rows="2"
            v-model="form.comments"
          ></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col text-end">
          <div v-if="waiting">
            <div class="spinner-border spinner-border-sm" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            Wait please...
          </div>
          <button type="submit" class="btn btn-green" v-else>Submit</button>
        </div>
      </div>
    </form>
    <div v-show="saved">
      <div class="row">
        <div class="col px-5 py-5 text-center">
          <i class="bi-check-circle display-1 text-blue mb-3 d-block"></i>
          <p class="text-dark-green">
            Thank you, one of our representatives will contact you soon.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: this.initialValues(),
      saved: false,
      waiting: false,
      childrenAges: [],
    };
  },
  watch: {
    "form.children": function (newVal) {
      this.childrenAges = [];
      for (let i = 0; i < newVal; i++) {
        this.childrenAges.push({
          childrenIndex: i,
          age: null,
        });
      }
    },
  },
  methods: {
    saveRequest(e) {
      let form = e.target;
      if (form.checkValidity() === true) {
        this.waiting = true;
        var url =
          "https://developers.eplat.com/api/webhooks/incoming/genericjson/newlead?code=80f32f6123104d09a72c000047564e51";
        var data = this.form;
        data.notes = "";
        data.notes += `Adults: ${this.form.adults}<br>`;
        data.notes += `Children: ${this.form.children}<br>`;
        data.notes += "Children Ages: ";

        this.childrenAges.forEach((child) => {
          data.notes += child.childrenIndex + 1 + ": " + child.age + ", ";
        });

        data.notes += `<br>Comments: ${this.form.comments}`;
        fetch(url, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            this.resetValues();
            this.waiting = false;
            this.saved = true;
            gtag_report_conversion_qr();
          })
          .catch((error) => {
            console.error("Error:", error);
            this.waiting = false;
          });
      }
      form.classList.add("was-validated");
      e.preventDefault();
    },
    validEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    resetValues() {
      this.form = this.initialValues();
      document.getElementById("requestForm").classList.remove("was-validated");
    },
    initialValues() {
      return {
        webhookID: "7ca55fae-1454-e5bc-2614-e8cbdef52bc5",
        firstName: null,
        lastName: null,
        email: null,
        phone: null,
        timeToReach: null,
        destination: null,
        arrivalDate: null,
        departureDate: null,
        adults: null,
        children: null,
        childrenAges: [],
        comments: null,
        notes: null,
      };
    },
  },
};
</script>
