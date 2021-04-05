<template>
  <div>
    <i
      class="bi-star-fill text-blue h4 me-1"
      v-for="s in parseInt(value)"
      :key="s"
    ></i>
    <i class="bi-star-half text-blue h4 me-1" v-if="value % 1 > 0"></i>
    <i
      class="bi-star text-blue h4 me-1"
      v-for="s in parseInt(5 - value)"
      :key="s"
    ></i>
  </div>
</template>
<script>
export default {
props: ['value']
}
</script>
