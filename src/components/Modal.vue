<template>
  <b-modal :id=id hide-footer hide-header no-close-on-backdrop no-close-on-esc no-fade size="lg" v-model="modalShow" :modalClass="['modal-animated']">
    <div class="modal-header">
      <div class="modal-title">
        <div class="fs4">{{title}}</div>
      </div>
      <div class="modal-actions">
        <button class="btn btn-secondary-icon" @click="close"><i class="far fa-times is2"></i></button>
      </div>
    </div>
    <div class="modal-body">
      <slot />
    </div>
  </b-modal>
</template>

<script>
export default {
  data() {
    return {
      modalShow: false
    }
  },
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String
    }
  },
  methods: {
    handleEsc(evt) {
      evt.preventDefault()
    },
    close() {
      this.modalShow = false
    }
  },
  mounted() {

  }
}
</script>

<style scoped>
</style>
