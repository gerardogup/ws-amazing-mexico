<template>
  <div>
    <h4>Would you like to receive a quote?</h4>
    <p>
      Maybe number of guests or number of nights you want to travel, don't match
      with our standard packages. Don't worry, you can fill the next form to
      request a quote according to your needs.
    </p>
    <p>
      Please enter your information and one of our reservations specialists will
      contact you by phone or email to bring you a customized quote.
    </p>
    <div class="row">
      <div class="col-md-6 mb-3">
        <label class="form-label">First Name</label>
        <input class="form-control" type="text" />
      </div>
      <div class="col-md-6 mb-3">
        <label class="form-label">Last Name</label>
        <input class="form-control" type="text" />
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 mb-3">
        <label class="form-label">Email</label>
        <input class="form-control" type="email" />
      </div>
      <div class="col-md-6 mb-3">
        <label class="form-label">Phone</label>
        <input class="form-control" type="text" />
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 mb-3">
        <label class="form-label">Time to be reached</label>
        <input class="form-control" type="text" />
      </div>
      <div class="col-md-6 mb-3">
        <label class="form-label">Destination</label>
        <select class="form-control">
          <option value="0">Select one</option>
          <option value="Puerto Vallarta">Puerto Vallarta</option>
          <option value="Cabo San Lucas">Cabo San Lucas</option>
          <option value="Riviera Nayarit">Riviera Nayarit</option>
          <option value="Cancun">Cancun</option>
          <option value="Riviera Maya">Riviera Maya</option>
          <option value="[Open]">[Open]</option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 mb-3">
        <label class="form-label">Arrival Date</label>
        <input class="form-control" type="date" />
      </div>
      <div class="col-md-6 mb-3">
        <label class="form-label">Departure Date</label>
        <input class="form-control" type="date" />
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 mb-3">
        <label class="form-label">Number of Adults</label>
        <input class="form-control" type="number" />
      </div>
      <div class="col-md-6 mb-3">
        <label class="form-label">Number of Children</label>
        <input class="form-control" type="number" />
      </div>
    </div>

    <div class="row">
      <div class="col-12 mb-3">
        <label class="form-label">Comments</label>
        <textarea class="form-control" rows="2"></textarea>
      </div>
    </div>
    <div class="row">
      <div class="col text-end">
        <button
          type="button"
          class="btn btn-outline-secondary me-3"
          data-bs-dismiss="modal"
        >
          Close
        </button>
        <button type="button" class="btn btn-green">Save changes</button>
      </div>
    </div>
  </div>
</template>