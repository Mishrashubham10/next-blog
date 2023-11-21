// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "blog-next-app-f4aed.firebaseapp.com",
  projectId: "blog-next-app-f4aed",
  storageBucket: "blog-next-app-f4aed.appspot.com",
  messagingSenderId: "125943597655",
  appId: "1:125943597655:web:97514101d2f6c155a17112"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);