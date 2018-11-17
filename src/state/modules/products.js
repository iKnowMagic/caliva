import api from '@/services'

export const state = {
  products: {}
}

export const mutations = {
  SET_PRODUCTS(state, data) {
    state.products = data
  }
}

export const actions = {
  init({ state }) {

  },
  addProducts({ commit }) {
    api.getProducts().then(response => {
      commit('SET_PRODUCTS', response.data.data.all)
    })
  }
}
