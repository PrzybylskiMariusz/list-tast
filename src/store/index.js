import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

const API = 'https://rickandmortyapi.com/api/character'

export default new Vuex.Store({
  state: {
    charackters: [],
    gender: ['unknown', 'Male', 'Female'],
    selectedGender: ''
  },
  mutations: {
    SET_CHARS (state, charackters) {
      state.charackters = charackters
    }
  },
  actions: {
    loadCharackters ({ commit }) {
      axios
        .get(API + '/?gender=' + this.selectedGender)
        .then(response => {
          console.log(response.data)
          const charackters = response.data.results
          commit('SET_CHARS', charackters)
        })
    },
    filteredChars () {
      return this.selectedGender ? this.charackters.filter(item => item.groups.map(group => group.name).some(this.selectedGender)) : this.charackters
    }
  },
  modules: {
  }
})
