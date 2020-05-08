// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";
import "firebase/firestore";
// Add the Firebase products that you want to use

import "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "todoapp-yt-ninja",
  storageBucket: "todoapp-yt-ninja.appspot.com",
  messagingSenderId: "647265305478",
  appId: "1:647265305478:web:359fe0f89104420ed86207",
  measurementId: "G-EVQRENL17V",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

export default db;
