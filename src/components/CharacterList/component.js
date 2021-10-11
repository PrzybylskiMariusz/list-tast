// @vue/component
import { mapActions, mapState } from 'vuex'
import FilterGender from '@/components/FilterGender'

export default {
  name: 'CharacterList',
  components: {
    FilterGender
  },
  data () {
    return {
    }
  },
  mounted () {
    this.$store.dispatch('loadCharacters')
  },
  computed: {
    ...mapState([
      'characters'
    ])
  },
  methods: mapActions(['loadCharacters'])
}
