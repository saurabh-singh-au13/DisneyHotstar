
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBvVlnam_CAjiMOFM5_Oz3htgCvZ3kduJQ",
    authDomain: "disneyplus-clone-1f559.firebaseapp.com",
    projectId: "disneyplus-clone-1f559",
    storageBucket: "disneyplus-clone-1f559.appspot.com",
    messagingSenderId: "427781809609",
    appId: "1:427781809609:web:7475d0c0b23a12dfe83418",
    measurementId: "G-9WBV8TJT8C"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
// const facebookAuthProvider = new firebase.auth.facebookAuthProvider();

export  { auth, GoogleAuthProvider };
export default db;

