<template>
  <div id="app">
    <div>
      <nav>
        <div class="container">
          <a href=''>
          VUECHAT
        </a>
          <ul class="nav__left">
          </ul>
          <ul class="nav__right">
            <a href=''>SIGNUP</a>
          </ul>
        </div>
      </nav>
      <main>
        <img src="../assets/logo.png" alt="Vue.js PWA">
        <router-view></router-view>
      </main>
    </div>
    <div id="login">
      <div class="container">
        <div class="row">
          <div class="login-clean">
            <form>
              <h1 class ="text">VUECHAT APP</h1>
              <h1>{{ msg }}</h1>

              <div class="form-group">
                <button class="btn btn-info btn-block" @click="googleAuth()"> Login with Google</button>
                <button class="btn btn-info btn-block" @click="facebookAuth()"> Login with Facebook</button>
                <button class="btn btn-info btn-block" @click="githubAuth()"> Login with Git Hub true playa</button>

                </a>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>


<script>
 /* eslint-disable */
import {config} from '../firebase/index'
import {
  googleAuth, 
  facebookAuth,
  githubAuth
} from '../firebase/auth'
export default {
  name: 'auth',
  data() {
    return {
      msg: ''
    }
  },
  methods: {
    googleAuth() {
      googleAuth()
    },
    facebookAuth() {
      facebookAuth()
    },
    githubAuth() {
      githubAuth()
    }
  }
}
</script>


<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.text {
  margin: auto;
}
</style>
