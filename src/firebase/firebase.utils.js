import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyCYL-aROQyLhnVuM67_8nPnEozjgCubu4Y',
  authDomain: 'crown-db-cc6d1.firebaseapp.com',
  databaseURL: 'https://crown-db-cc6d1.firebaseio.com',
  projectId: 'crown-db-cc6d1',
  storageBucket: 'crown-db-cc6d1.appspot.com',
  messagingSenderId: '541959388911',
  appId: '1:541959388911:web:a0ec06a9f8a8ca75d9251a',
  measurementId: 'G-BZP2P0XQH4',
}

///add user to database if does not exist
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()
  console.log(snapShot)

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('Error Creating Error')
    }
  }
  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

//setup for google login
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
