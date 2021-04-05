<template>
  <div>
    <h2 class="oh-golds text-dark-green">Amenities</h2>
    <div class="row">
      <div class="col-md-4">
        <ul class="green-list">
          <li v-for="a in amenitiesSection(1, 3)" :key="a">
            {{ a }}
          </li>
        </ul>
      </div>
      <div class="col-md-4">
        <ul class="green-list">
          <li v-for="a in amenitiesSection(2, 3)" :key="a">
            {{ a }}
          </li>
        </ul>
      </div>
      <div class="col-md-4">
        <ul class="green-list">
          <li v-for="a in amenitiesSection(3, 3)" :key="a">
            {{ a }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["content"],
  methods: {
    amenitiesSection(part, sections) {
      let amount = parseInt(this.content.length / sections);
      if (this.content.length % sections > 0) {
        amount++;
      }
      let start = part * amount - amount;
      return this.content.slice(start, amount * part);
    },
  },
};
</script>
