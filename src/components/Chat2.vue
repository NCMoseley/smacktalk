<template>
  <div>
    <div>
      <nav>
        <div class="container">
          <a href=''>
            <img class="logo" src="../assets/logo.png" alt="Vue.js PWA">
          </a>
          <ul class="nav__left">
          </ul>
          <ul class="nav__right">
            <a href='' @click="logOut()">signout</a>
             <a href='' @click="switchWindow()">switch window</a>
          </ul>
        </div>
      </nav>
      <main >
        <router-view></router-view>
      </main>
    </div>
    <div>

      <div class="chatbox">
        <div class="chatlogs"> 
          <div class="item" v-for="item in anArray">
            <div> 
              <img class="user-photo" v-bind:src="item.photo_url" />
              <!-- <span class="chat-name">{{item.name}}</span> -->
               <p>
                  <span class="chat-time"> {{item.timestamp | formatDate}}</span>
                </p>
            </div>
           
            <div class="chat friend" >
              
              <div class="chat-message">
                <p class="chat-text">{{item.message}} </p>
               
              </div>
            </div>
          </div>
        </div>
        <form @submit.prevent="addComment">
        <div class="chat-form">
          <textarea v-model="newComment" placeholder="Type and click send to chat"></textarea>
          <button>send</button>
        </div>
        </form>
      </div>

    </div>

</div>
</template>

<script>
/*eslint-disable*/
import firebase, {
  chatRef2
} from '../firebase/index'
import Vue from 'vue'
import Vuefire from 'vuefire'
import dateFilter from '../utils/filter.js';
import moment from 'moment'
Vue.use(Vuefire);
export default {
  name: 'chat',
  data() {
    return {
      comment: '',
      newComment: '',
      loading: true
    };
  },
   
  firebase: {
    // can bind to either a direct Firebase reference or a query
    anArray: chatRef2.limitToLast(5),
    
    // optionally provide the cancelCallback
    cancelCallback: function () {
       
    },
    // this is called once the data has been retrieved from firebase
    readyCallback: function () {
     
    }
  },
  filters: {
    dateFilter,
  },
  methods: {
    logOut() {
      firebase.auth().signOut()
    },
    switchWindow() {
      this.$router.push('/chat')
    },
    addComment() {
      if (this.newComment !== '') {
        this.comment = this.newComment.trim();
        chatRef2.push({
          message: this.comment,
          name: this.getUserName(),
          timestamp: moment().unix(),
          userId: this.getUserId(),
          photo_url:this.getPhotoURL()
        });
        this.newComment = "";
      }
    },
    getUserId() {
      return firebase.auth().currentUser.uid;
    },
    getUserName() {
      return firebase.auth().currentUser.displayName;
    },
    getPhotoURL() {
      return firebase.auth().currentUser.photoURL;
    }
  }
}
</script>
<style>
textarea {
  width: 100%;
}
button {
  color: darkblue;
  font-family: sans-serif;
  text-decoration: none;
  font-weight: 500;
  width: 100%;
  background-color: rgb(147, 255, 145);
  margin-bottom: 500px;
}
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
.logo {
  text-align: center;
  width: 200px;
}
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #eeeeee;
  margin: 2%;
  padding: 2%;
}
.item:nth-child(even) {
  flex-direction: row-reverse;
  background-color: lightblue;
}
.user-photo {
  height: 30px;
  width: 30px;
  border: 1px solid black;
  border-radius: 50%;
}
.chat-message {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-left: 250px;
  padding-right: 250px;
}
.chat-text {
  padding-right: 50px;
}
.chat-time {
  font-size: 10px;
}
[v-cloak] {
  display: none;
}
</style>