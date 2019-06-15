import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
var firebaseConfig = {
  apiKey: "AIzaSyDI8AZZwSapFb9GPuEcStMYMCOzJ6Vq1r0",
  authDomain: "civichack-bbd82.firebaseapp.com",
  databaseURL: "https://civichack-bbd82.firebaseio.com",
  projectId: "civichack-bbd82",
  storageBucket: "civichack-bbd82.appspot.com",
  messagingSenderId: "753511323609",
  appId: "1:753511323609:web:44c5474210d508c4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
const settings = {
  timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
const usersCollection = db.collection('users')

export {
  db,
  auth,
  currentUser,
  usersCollection,
}