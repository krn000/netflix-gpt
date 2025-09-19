// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3wqvc6B-wsALxheI_q74xTjh5ZI2jkYE",
  authDomain: "netflixgpt-2f960.firebaseapp.com",
  projectId: "netflixgpt-2f960",
  storageBucket: "netflixgpt-2f960.firebasestorage.app",
  messagingSenderId: "698486561758",
  appId: "1:698486561758:web:6edb71f1bd661c39c51b4f",
  measurementId: "G-2X5F3NG7VM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
