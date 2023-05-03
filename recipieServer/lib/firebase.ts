// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import * as admin from "firebase-admin";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy45uOxg6S7f5MGXnGeTwo9ZgzNsshZ08",
  authDomain: "recipie-dev.firebaseapp.com",
  credential: admin.credential.applicationDefault(),
  projectId: "recipie-dev",
  storageBucket: "recipie-dev.appspot.com",
  messagingSenderId: "65605346184",
  appId: "1:65605346184:web:7a0be4dce87c79340ad03d",
  measurementId: "G-W7RQDXD95M"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
admin.initializeApp(firebaseConfig);
export const db = admin.firestore();