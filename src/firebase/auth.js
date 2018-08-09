import firebase from './index'
/* eslint-disable */
export function googleAuth() {
  const provider = new firebase.auth.GoogleAuthProvider()
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then(
      result => {
        console.log('Auth worked!', result)
        this.$router.push('/chat')
      },
      error => {
        console.log('Unable to auth', error)
      }
    )
}

export function facebookAuth() {
  const provider = new firebase.auth.FacebookAuthProvider()
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken
      const user = result.user
      console.log('Auth worked!', result)
      this.$router.push('/chat')
    })
    .catch(function(error) {
      // Handle Errors here.
      console.log('Unable to auth', error)
      // const errorCode = error.code
      // const errorMessage = error.message
      // The email of the user's account used.
      // const email = error.email
      // The firebase.auth.AuthCredential type that was used.
      // const credential = error.credential
      // ...
    })
}

export function githubAuth() {
  const provider = new firebase.auth.GithubAuthProvider()
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken
      const user = result.user
      console.log('Auth worked!', result)
      this.$router.push('/chat')
    })
    .catch(function(error) {
      // Handle Errors here.
      console.log('Unable to auth', error)
      // const errorCode = error.code
      // const errorMessage = error.message
      // const email = error.email
      // const credential = error.credential
    })
}
