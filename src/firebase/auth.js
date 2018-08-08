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

export function gitHubAuth () {
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
