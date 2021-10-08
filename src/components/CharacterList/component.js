import axios from 'axios'

const API = 'https://rickandmortyapi.com/api/character'

// @vue/component
export default {
  name: 'CharacterList',
  data () {
    return {
      characters: ''
    }
  },
  mounted () {
    axios.get(API)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
