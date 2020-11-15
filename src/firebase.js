import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "just-clock-it-27193.firebaseapp.com",
  databaseURL: "https://just-clock-it-27193.firebaseio.com",
  projectId: "just-clock-it-27193",
  storageBucket: "just-clock-it-27193.appspot.com",
  messagingSenderId: "274936683537",
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: "G-Q161FKM3M5",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
