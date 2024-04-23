// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyByOFJpU0JbRq6EWA3do4CF1UJOK88OD38",
  authDomain: "netflix-clone-app-fdff3.firebaseapp.com",
  projectId: "netflix-clone-app-fdff3",
  storageBucket: "netflix-clone-app-fdff3.appspot.com",
  messagingSenderId: "204857409124",
  appId: "1:204857409124:web:57fda7904abb0735c26971",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuth = new GoogleAuthProvider();
