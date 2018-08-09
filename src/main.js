// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable*/
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Vuefire from 'vuefire'
import router from './router'
import firebase from './firebase/index'

Vue.config.productionTip = false
Vue.use(Vuefire)
Vue.use(VueRouter)
/* eslint-disable no-new */
new Vue({
  router,
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.$router.push('/auth')
      }
    })
  },
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})
