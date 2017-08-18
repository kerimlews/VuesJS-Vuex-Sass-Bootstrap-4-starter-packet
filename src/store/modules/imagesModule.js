const state = { //
  images: []
}
const mutations = { //
  'SET_IMAGES' (state, images) {
    state.images = images
  }
}
const actions = {
  setStock: ({ commit }, images) => { //
    commit('SET_IMAGES', images)
  }
}
const getters = { //
  images: state => {
    return state.images
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}

