import firebase from 'firebase'

export const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID
}

firebase.initializeApp(config)

const firebaseRef = firebase.database().ref()
export const chatRef = firebaseRef.child('chat')
export const chatRef2 = firebaseRef.child('chat2')
export default firebase
