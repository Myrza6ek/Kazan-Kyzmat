// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDr1BPwRWfyyWoc5BiLr_LCDlMz0WGm7L0",
  authDomain: "final-hackaton-23ba2.firebaseapp.com",
  projectId: "final-hackaton-23ba2",
  storageBucket: "final-hackaton-23ba2.appspot.com",
  messagingSenderId: "136164055333",
  appId: "1:136164055333:web:47216fb90461d7551ca2cc",
  measurementId: "G-YJPDD8ZE3E",
};

// Initialize Firebase
// const fire = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
