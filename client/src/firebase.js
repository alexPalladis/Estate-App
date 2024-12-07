// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-82c06.firebaseapp.com",
  projectId: "mern-estate-82c06",
  storageBucket: "mern-estate-82c06.firebasestorage.app",
  messagingSenderId: "341358799843",
  appId: "1:341358799843:web:fa3ad5605e853edcfc4ed6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);