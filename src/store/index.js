import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

const API = 'https://rickandmortyapi.com/api/character'

export default new Vuex.Store({
  state: {
    charackters: []
  },
  mutations: {
    SET_CHARS (state, charackters) {
      state.charackters = charackters
    }
  },
  actions: {
    loadCharackters ({ commit }) {
      axios
        .get(API)
        .then(response => {
          console.log(response.data)
          const charackters = response.data.results
          commit('SET_CHARS', charackters)
        })
    }
  },
  modules: {
  }
})
