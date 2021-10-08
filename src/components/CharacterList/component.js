// @vue/component
import { mapState } from 'vuex'

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
      'charackters'
    ])
  }
}
