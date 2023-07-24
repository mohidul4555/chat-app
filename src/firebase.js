// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgU7e5IfwwAulf7QgkoDW5v4Dqqo45NBY",
  authDomain: "chat-app-3427c.firebaseapp.com",
  projectId: "chat-app-3427c",
  storageBucket: "chat-app-3427c.appspot.com",
  messagingSenderId: "159320294438",
  appId: "1:159320294438:web:8c5c1da4e589283372d2e7",
  measurementId: "G-YBVSYMG8HC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);