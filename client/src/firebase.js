// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "studsaver-c3774.firebaseapp.com",
  projectId: "studsaver-c3774",
  storageBucket: "studsaver-c3774.firebasestorage.app",
  messagingSenderId: "1090655125493",
  appId: "1:1090655125493:web:287a05ee5e1e6f4929aabc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);