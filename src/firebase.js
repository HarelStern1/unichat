import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyAlWLgKcrkAFPrEmXmADRTR2MVDO2tCVAQ",
    authDomain: "unichat-e686f.firebaseapp.com",
    projectId: "unichat-e686f",
    storageBucket: "unichat-e686f.appspot.com",
    messagingSenderId: "512261935234",
    appId: "1:512261935234:web:4eaae3be8a0ebbac86249b",
  })
  .auth();
