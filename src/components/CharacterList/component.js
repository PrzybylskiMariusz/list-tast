// @vue/component
import { mapActions, mapState } from 'vuex'

export default {
  name: 'CharacterList',
  data () {
    return {
    }
  },
  mounted () {
    this.$store.dispatch('loadCharackters')
  },
  computed: {
    ...mapState([
      'charackters',
      'gender',
      'selectedGender'
    ])
  },
  methods: {
    ...mapActions([
      'filteredChars'
    ])
  }
}
