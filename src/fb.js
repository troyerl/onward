import firebase from 'firebase'

const firebaseConfig = {
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

const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

const usersCollection = db.collection('users')

export default {
  db,
  auth,
  currentUser,
  usersCollection,
}