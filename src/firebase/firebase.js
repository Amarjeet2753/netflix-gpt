// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_x7P1rINx8A2QrCk-53wKudpZzx_gblo",
  authDomain: "netflix-gpt-2382b.firebaseapp.com",
  projectId: "netflix-gpt-2382b",
  storageBucket: "netflix-gpt-2382b.firebasestorage.app",
  messagingSenderId: "465259541335",
  appId: "1:465259541335:web:999dd990ab34fdebe58412",
  measurementId: "G-XT27D8ZG2S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
const analytics = getAnalytics(app);