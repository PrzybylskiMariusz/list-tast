import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

const API = 'https://rickandmortyapi.com/api/character'

export default new Vuex.Store({
  state: {
    characters: []
  },
  mutations: {
    SET_CHARS (state, characters) {
      state.characters = characters
    }
  },
  actions: {
    loadCharacters ({ commit }) {
      axios
        .get(API)
        .then(response => {
          const characters = response.data.results
          commit('SET_CHARS', characters)
        })
    },
    filterCharacters ({ commit }, e) {
      const selectedValue = e.target.options[e.target.options.selectedIndex].innerText

      axios
        .get(API + '/?gender=' + selectedValue)
        .then(response => {
          const characters = response.data.results
          commit('SET_CHARS', characters)
        })
    }
  },
  modules: {
  }
})
