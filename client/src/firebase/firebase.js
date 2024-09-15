// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE,
  authDomain: "rmtoysecommerce.firebaseapp.com",
  projectId: "rmtoysecommerce",
  storageBucket: "rmtoysecommerce.appspot.com",
  messagingSenderId: "884799599000",
  appId: "1:884799599000:web:dfc6c5163790bcced77bed",
  measurementId: "G-QZ6X7609FJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app