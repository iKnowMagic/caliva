<template>
  <div>
    <div class="card" style="width: 18rem;">
  <img class="card-img-top" :src="cproducts[0].photo" :alt="cproducts[0].name">
  <div class="card-body">
    <h5 class="card-title">{{cproducts[0].name}}</h5>
    <p class="card-text">{{cproducts[0].description}}</p>
  </div>
</div>
    {{cproducts[0]}}
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
          photo: product.photos[0],
          id: product._id,
          category: product.category,
          description: product.description,
          name: product.name,
          price: product.pricing.unit.value,
          species: product.species
        }
      })
    })
  }
}
</script>
