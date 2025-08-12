// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwqMNPiy9B1djrnB_55UwYdbGjX2B2Z-Y",
  authDomain: "rikon-dev.firebaseapp.com",
  projectId: "rikon-dev",
  storageBucket: "rikon-dev.firebasestorage.app",
  messagingSenderId: "45176902120",
  appId: "1:45176902120:web:60e3892bf75fc43ec7d45d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;