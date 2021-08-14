import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyC7xJPTA745E9KKzsfwNIcBvNZancXDnPQ',
    authDomain: 'vue-firebase-test-65538.firebaseapp.com',
    projectId: 'vue-firebase-test-65538',
    storageBucket: 'vue-firebase-test-65538.appspot.com',
    messagingSenderId: '664333913795',
    appId: '1:664333913795:web:30012bd5c55cf7c8cb1c76',
}

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()

const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }
