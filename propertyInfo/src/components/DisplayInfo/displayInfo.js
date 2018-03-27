export default {
  name: 'GetInfo',
  data () {
    return {
        title: 'Property Information',
        details: this.$route.query.details
    }
  }
}
