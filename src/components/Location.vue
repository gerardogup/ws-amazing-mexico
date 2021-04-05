<template>
    <div v-html="content.map" class="ratio ratio-16x9"></div>
</template>
<script>
export default {
   props:['content']
}
</script>
