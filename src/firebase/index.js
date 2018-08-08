import firebase from 'firebase'

export const config = {
  apiKey: 'AIzaSyBmhECcZ-lNlvmmix3E6IQUqAMLr6z5ptU',
  authDomain: 'wired-cogency-206420.firebaseapp.com',
  databaseURL: 'https://wired-cogency-206420.firebaseio.com',
  projectId: 'wired-cogency-206420',
  storageBucket: 'wired-cogency-206420.appspot.com',
  messagingSenderId: '762304385080'
}

firebase.initializeApp(config)

var firebaseRef = firebase.database().ref()
export default firebase
export var chatRef = firebaseRef.child('chat')
