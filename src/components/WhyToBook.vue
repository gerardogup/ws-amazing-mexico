<template>
  <section class="why pb-5">
    <div class="container py-5">
      <div class="row">
        <div class="col text-center">
          <h2 class="pb-4 oh-golds text-dark-green display-5">
            Why to book with us?
          </h2>
        </div>
      </div>
      <div class="row">
        <div class="col text-center">
          <img
            :src="require('@/assets/images/home/best-price.png')"
            alt="Best Price"
          />
          <div class="fs-5 mt-4 fw-bold text-muted">Best Price<br>Guaranteed</div>
        </div>
        <div class="col text-center">
          <img
            :src="require('@/assets/images/home/customer-service.png')"
            alt="Customer Service"
          />
          <div class="fs-5 mt-4 fw-bold text-muted">
            Customer Service<br />7 Days a Week
          </div>
        </div>
        <div class="col text-center">
          <img
            :src="require('@/assets/images/home/resort-directly.png')"
            alt="Resort Directly"
          />
          <div class="fs-5 mt-4 fw-bold text-muted">
            We work directly with the resort
          </div>
        </div>
        <div class="col text-center">
          <img
            :src="require('@/assets/images/home/flexible.png')"
            alt="Flexible Rescheduling"
          />
          <div class="fs-5 mt-4 fw-bold text-muted">Flexible<br>Rescheduling</div>
        </div>
        <div class="col text-center">
          <img
            :src="require('@/assets/images/home/secure.png')"
            alt="Secure Transactions"
          />
          <div class="fs-5 mt-4 fw-bold text-muted">Secure<br>Transactions</div>
        </div>
      </div>
    </div>
  </section>
</template>