// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyEyWmLUBAS1c8e0SYAlAO0v2zrr1Ad2A",
  authDomain: "chess-d34d1.firebaseapp.com",
  projectId: "chess-d34d1",
  storageBucket: "chess-d34d1.firebasestorage.app",
  messagingSenderId: "365735351127",
  appId: "1:365735351127:web:8ff2bc89ec6c7b5bb6a412",
  measurementId: "G-PZ0TMRNC4S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
