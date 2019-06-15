import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyC5OzS0p9OBBTk1wyTT5_Zyw2w8x1SD5Gg",
  authDomain: "vuegram-234.firebaseapp.com",
  databaseURL: "https://vuegram-234.firebaseio.com",
  projectId: "vuegram-234",
  storageBucket: "vuegram-234.appspot.com",
  messagingSenderId: "783331792791",
  appId: "1:783331792791:web:25f37a4d3285d5f4"
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