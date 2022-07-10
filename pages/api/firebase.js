// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkST9mt3CKAIn7iLzhF6ttQDaXPJSBelQ",
  authDomain: "saveevent-87216.firebaseapp.com",
  projectId: "saveevent-87216",
  storageBucket: "saveevent-87216.appspot.com",
  messagingSenderId: "56505861801",
  appId: "1:56505861801:web:55329e2196eaf20b094bb8",
  measurementId: "G-P5HF8XFQ0J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const Firestore = getFirestore();