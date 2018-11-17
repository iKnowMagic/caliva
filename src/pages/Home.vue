<template>
  <div>
    {{products}}
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import _ from 'lodash'

export default {
  computed: {
    ...mapState('products', {
      products: state => state.products
    })
  },
  methods: {
    ...mapActions('products', [
      'addProducts'
    ])
  },
  mounted() {
    this.addProducts()
  }
}
</script>
