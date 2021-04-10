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
      <p>Winner will be notified on January 31</p>
      <form>
        <div class="mb-3">
          <label class="form-label">First Name</label>
          <input type="text" class="form-control" />
        </div>
        <div class="mb-3">
          <label class="form-label">Last Name</label>
          <input type="text" class="form-control" />
        </div>
        <div class="mb-3">
          <label class="form-label">Email address</label>
          <input
            type="email"
            class="form-control"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">Phone</label>
          <input type="text" class="form-control" />
        </div>
        <div class="mb-3 text-center">
          <button type="button" class="btn btn-green">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>