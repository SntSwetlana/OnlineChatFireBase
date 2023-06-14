// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC_irvTVHuaDfvkc_KKZ7VaGJbwgFZ08X8",
    authDomain: "sntchatterox.firebaseapp.com",
    projectId: "sntchatterox",
    storageBucket: "sntchatterox.appspot.com",
    messagingSenderId: "750814597864",
    appId: "1:750814597864:web:4195fd92d7322510db2f5d",
    measurementId: "G-6LQV9DRETK"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);