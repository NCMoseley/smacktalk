/*eslint-disable*/

import Router from 'vue-router'
import Auth from '../components/Auth.vue'
import Chat from '../components/Chat.vue'
import Chat2 from '../components/Chat2.vue'

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Auth },
    { path: '/auth', component: Auth },
    { path: '/chat', component: Chat },
    { path: '/chat2', component: Chat2 }
  ]
})

export default router
