import axios from 'axios';
import { truncate } from 'fs';
export default {
  name: 'GetInfo',
  data () {
    return {
      title: 'Property Information',
      address:'10216 N Willow Ave',
      zipcode:'64157'
    }
  },
  methods: {
    submit: function() {
      var body = {
        "address": this.address, 
        "zipcode": this.zipcode
      }
      var router = this.$router
      var url = 'https://cors-anywhere.herokuapp.com/https://api.housecanary.com/v2/property/details?'

      var config = {
        headers: {'Authorization': 'Basic OVBKRk01SUdTMFBJSFg2SVpXTlE6VnlZWU90VGtTV2JZY043ZDVMUDVCV3NjQkFuNDA4WmM='}
      };
      
      var addressUrlParam = this.address.split(' ').join('+');
      url = url + 'address=' + addressUrlParam + '&zipcode=' + this.zipcode;

      axios.get(url, config).then(function (response) {
        var data = response["data"][0]["property/details"]["result"]["property"];
        router.push({path: '/display', query:{ 'details': data}})
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
}
