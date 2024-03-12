// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-d7474.firebaseapp.com",
  projectId: "mern-estate-d7474",
  storageBucket: "mern-estate-d7474.appspot.com",
  messagingSenderId: "1063154593681",
  appId: "1:1063154593681:web:35f22c25fc3bfda67a7430"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);