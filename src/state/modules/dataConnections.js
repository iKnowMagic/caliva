import api from '@/services'

export const state = {
  dataconnections: {}
}

export const mutations = {
  SET_DATACONNECTIONS(state, data) {
    state.dataconnections = data
  }
}

export const actions = {
  addDataConnections({ commit }) {
    api.getDataConnections().then(response => {
      console.log(response)
    })
  }
}
