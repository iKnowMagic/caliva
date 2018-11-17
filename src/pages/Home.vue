<template>
  <div>
    {{cproducts}}
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import _ from 'lodash'

export default {
  data() {
    return {
      cproducts: {}
    }
  },
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
    this.addProducts().then(() => {
      console.log(this.products)
      this.cproducts = _.map(this.products, (product) => {
        return {
          photo: product.photos[0]
        }
      })
    })
  }
}
</script>
