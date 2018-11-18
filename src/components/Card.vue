<template>
  <div class="card" style="width: 18rem">
    <img class="card-img-top" :src="photo" :alt="name">
    <div class="card-body">
      <h5 class="card-title">{{name}}</h5>
      <!-- <p class="card-text">{{description}}</p> -->
    </div>
  </div>
</template>

<script>
export default {
  props: ['photo', 'description', 'name']
}
</script>

<style scoped>
</style>
