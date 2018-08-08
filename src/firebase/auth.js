import firebase from './index'

export function googleAuth () {
  const provider = new firebase.auth.GoogleAuthProvider()
  // const result = auth().signInWithPopup(provider);
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

export function facebookAuth () {
  const provider = new firebase.auth.FacebookAuthProvider()
  // const result = auth().signInWithPopup(provider);
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

export function githubAuth () {
  const provider = new firebase.auth.GithubAuthProvider()

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

// firebase.auth().fetchProvidersForEmail(error.email)
//   .then(providers => {
//     //providers returns this array -> ["google.com"]
//     // You need to sign in the user to that google account
//     // with the same email.
//     // In a browser you can call:
//     // var provider = new firebase.auth.GoogleAuthProvider();
//     // provider.setCustomParameters({login_hint: error.email});
//     // firebase.auth().signInWithPopup(provider)
//     // If you have your own mechanism to get that token, you get it
//     // for that Google email user and sign in
//     firebase.auth().signInWithCredential(googleCred)
//       .then(user => {
//         // You can now link the pending credential from the first
//         // error.
//         user.linkWithCredential(error.credential)
//       })
//       .catch(error => log(error))
