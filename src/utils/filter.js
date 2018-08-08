import Vue from 'vue'
import moment from 'moment'

export default Vue.filter('formatDate', function (value) {
  if (value) {
    return moment.unix(value).format(' h:mm a')
  }
})
