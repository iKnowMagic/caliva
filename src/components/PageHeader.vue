<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-24">
        <div class="page-header">
          <div class="page-title">
            <div class="fs4">{{title}}</div>
          </div>
          <div class="page-actions">
            <div class="btn-group">
              <slot />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style scoped>
</style>
