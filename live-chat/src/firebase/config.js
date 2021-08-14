import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyC7xJPTA745E9KKzsfwNIcBvNZancXDnPQ',
    authDomain: 'vue-firebase-test-65538.firebaseapp.com',
    projectId: 'vue-firebase-test-65538',
    storageBucket: 'vue-firebase-test-65538.appspot.com',
    messagingSenderId: '664333913795',
    appId: '1:664333913795:web:e66250ad0aa111cccb1c76',
}

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp, projectAuth }
