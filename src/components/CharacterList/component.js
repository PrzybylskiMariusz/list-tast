// @vue/component
import { mapState } from 'vuex'

export default {
  name: 'CharacterList',
  data () {
    return {
      items: [],
      gender: ['unknown', 'Male', 'Female'],
      selectedGender: ''
    }
  },
  mounted () {
    this.$store.dispatch('loadCharackters')
  },
  computed: {
    ...mapState([
      'charackters'
    ]),
    filteredChars () {
      return this.selectedGender ? this.items.filter(item => item.groups.map(group => group.name).some(this.selectedGender)) : this.items
    }
  }
}
