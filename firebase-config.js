// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOytDp6JtalEx8RLRL5hqTdBvgUQaR1Ac",
  authDomain: "citizenapp-1acc6.firebaseapp.com",
  projectId: "citizenapp-1acc6",
  storageBucket: "citizenapp-1acc6.firebasestorage.app",
  messagingSenderId: "231544825989",
  appId: "1:231544825989:web:c0acc8548353838956e1ec",
  measurementId: "G-463SS22FHW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
