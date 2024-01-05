// import * as firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP1ihbEq2vjZJyCtfwtu4uNZt2LedQHp0",
  authDomain: "ecommerce-5447a.firebaseapp.com",
  projectId: "ecommerce-5447a",
  storageBucket: "ecommerce-5447a.appspot.com",
  messagingSenderId: "692772397888",
  appId: "1:692772397888:web:a31f96b36fea5d9c1b10a5",
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthprovider = new firebase.auth.GoogleAuthProvider();
