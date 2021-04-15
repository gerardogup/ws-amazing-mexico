<template>
  <div>
    <div class="bg-blue rounded-top text-white pt-4 px-4 pb-3 lh-1">
      <div>Would you like a</div>
      <div class="h2 fw-bold">Free Vacation</div>
    </div>
    <div class="bg-turquoise px-4 py-4">
      <p>
        Register to win a Free Vacation, 5 days and 4 nights at Puerto Vallarta,
        Cabo San Lucas or Loreto.
      </p>
      <p>Winner will be notified on {{ nextMonth() }} 1st</p>
      <form
        method="post"
        @submit="saveSweepstake"
        :id="this.id"
        novalidate
        class="needs-validation"
        v-show="!saved"
      >
        <div class="mb-3">
          <label class="form-label">First Name</label>
          <input
            type="text"
            class="form-control"
            required
            v-model="form.firstName"
          />
          <span class="form-text invalid-feedback"
            >Please provide your first name</span
          >
        </div>
        <div class="mb-3">
          <label class="form-label">Last Name</label>
          <input
            type="text"
            class="form-control"
            required
            v-model="form.lastName"
          />
          <span class="form-text invalid-feedback"
            >Please provide your last name</span
          >
        </div>
        <div class="mb-3">
          <label class="form-label">Email address</label>
          <input
            type="email"
            class="form-control"
            aria-describedby="emailHelp"
            required
            v-model="form.email"
          />
          <div class="form-text">
            We'll never share your email with anyone else.
          </div>
          <span class="form-text invalid-feedback"
            >Please provide your email addrees</span
          >
        </div>
        <div class="mb-3">
          <label class="form-label">Phone</label>
          <input
            type="text"
            class="form-control"
            required
            v-model="form.phone"
            placeholder="0000000000"
            maxlength="10"
          />
          <span class="form-text invalid-feedback"
            >Please provide your phone number</span
          >
        </div>
        <div class="mb-3 text-center">
          <div v-if="waiting">
            <div class="spinner-border spinner-border-sm" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            Submitting...
          </div>
          <button type="submit" class="btn btn-green" v-else>Submit</button>
        </div>
      </form>
      <div v-show="saved">
        <div class="row">
          <div class="col px-5 py-5 text-center">
            <i class="bi-check-circle display-1 text-blue mb-3 d-block"></i>
            <p class="text-dark-green">Thank you for participating!</p>
          </div>
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
      id: "sweepstakeForm" + this.randomString(8),
      saved: false,
      waiting: false,
    };
  },
  methods: {
    nextMonth() { 
      var objDate = new Date();
      objDate.setMonth(objDate.getMonth() + 1);

      var locale = "en-us",
        month = objDate.toLocaleString(locale, { month: "long" });
      return month;
    },
    saveSweepstake(e) {
      let form = e.target;
      if (form.checkValidity() === true) {
        this.waiting = true;
        var url =
          "https://developers.eplat.com/api/webhooks/incoming/genericjson/newlead?code=80f32f6123104d09a72c000047564e51";
        var data = this.form;

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
            gtag_report_conversion_fv();
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
      document.getElementById(this.id).classList.remove("was-validated");
    },
    initialValues() {
      return {
        webhookID: "4b8bfcb9-bcdc-e3d7-e5d8-b9cb7e9000a3",
        firstName: null,
        lastName: null,
        email: null,
        phone: null,
      };
    },
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
