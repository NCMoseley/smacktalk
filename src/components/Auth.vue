<template>
  <div id="app">
    <div>
      <nav>
        <div class="container">
          <a href=''>
         <img src="../assets/logo.png" alt="Vue.js PWA">
        </a>
          <ul class="nav__left">
          </ul>
          <ul class="nav__right">
            <a href=''>signup</a>
          </ul>
        </div>
      </nav>
      <main>
        
        <router-view></router-view>
      </main>
    </div>
    <div id="login">
      <div class="container">
        <div class="row">
          <div class="login-clean">
            <form>
              <h1>{{ msg }}</h1>

              <div class="form-group">
                
                <div class="google-btn">
                  <div class="google-icon-wrapper">
                   <img class="google-icon-svg" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                  </div>
                  <p class="btn-text" @click="googleAuth()"><b>Sign in with Google</b></p>
                </div>
                <button class="loginBtn loginBtn--facebook" @click="facebookAuth()">Login with Facebook</button>
                <button class="loginBtn loginBtn--GitHub" @click="githubAuth()"> Login with Git Hub, true playa</button>
                
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
.container a {
  color: darkblue;
  font-family: sans-serif;
  text-decoration: none;
  font-weight: 500;
}
.nav__right {
  padding: 3%;
}
.text {
  margin: auto;
}

.form-group {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.google-btn {
  margin: 25px;
  width: 80%;
  min-width: 184px;
  max-width: 184px;
  height: 42px;
  background-color: #fcfcfc;
  border-radius: 2px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  cursor: hand;
  align-self: center;
  user-select: none;
  transition: all 400ms ease 0s;
  display: flex;
}
.google-btn .google-icon-wrapper {
  position: absolute;
  margin-top: 1px;
  margin-left: 1px;
  width: 40px;
  height: 40px;
  border-radius: 2px;
  user-select: none;
}
.google-btn .google-icon-svg {
  position: absolute;
  margin-top: 11px;
  margin-left: 11px;
  width: 18px;
  height: 18px;
  user-select: none;
}
.google-btn .btn-text {
  float: right;
  margin: 11px 14px 40px 40px;
  color: #757575;
  font-size: 14px;
  letter-spacing: 0.2px;
  font-family: Roboto;
  user-select: none;
}
.google-btn:hover {
  box-shadow: 0 3px 8px rgba(117, 117, 117, 0.5);
  user-select: none;
}
.google-btn:active {
  box-shadow: 0 1px 1px #757575;
  background: #f8f8f8;
  color: #fff;
  user-select: none;
}

.loginBtn {
  cursor: pointer;
  box-sizing: border-box;
  position: relative;
  /* width: 13em;  - apply for fixed size */
  margin: 0 0 25px 0;
  padding: 0 15px 0 46px;
  border: none;
  text-align: left;
  line-height: 34px;
  white-space: nowrap;
  border-radius: 0.2em;
  font-size: 16px;
  color: #fff;
}
.loginBtn:before {
  content: '';
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 34px;
  height: 100%;
}
.loginBtn:focus {
  outline: none;
}
.loginBtn:active {
  box-shadow: inset 0 0 0 32px rgba(0, 0, 0, 0.1);
}

/* Facebook */
.loginBtn--facebook {
  background-color: #4c69ba;
  background-image: linear-gradient(#4c69ba, #3b55a0);

  text-shadow: 0 -1px 0 #354c8c;
}
.loginBtn--facebook:before {
  border-right: #364e92 1px solid;
  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png')
    6px 6px no-repeat;
}
.loginBtn--facebook:hover,
.loginBtn--facebook:focus {
  background-color: #5b7bd5;
  background-image: linear-gradient(#5b7bd5, #4864b1);
}
/* GitHub */
.loginBtn--GitHub {
  background-color: #707070;
  background-image: linear-gradient(
    to top,
    #5c646f,
    #62676f,
    #68696f,
    #6c6d70,
    #707070
  );
  font-family: monospace;
  padding: 0 15px 0 15px;
}
.loginBtn--GitHub:hover,
.loginBtn--GitHub:focus {
  background-color: #a3a3a3;
  background-image: linear-gradient(#8c99aa, #a3a5aa);
}
</style>
