import Vue from 'vue'
import Vuex from 'vuex'

import * as images from './modules/imagesModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    images
  }
})
