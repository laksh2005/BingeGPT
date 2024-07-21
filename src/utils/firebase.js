// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDdXMF04lh8g_6rzOfUlxP1k_yKwnJXHk",
  authDomain: "bingegpt-2c26e.firebaseapp.com",
  projectId: "bingegpt-2c26e",
  storageBucket: "bingegpt-2c26e.appspot.com",
  messagingSenderId: "379453154847",
  appId: "1:379453154847:web:5dc3da18254d55b9c0172a",
  measurementId: "G-3V9F5H6592"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();