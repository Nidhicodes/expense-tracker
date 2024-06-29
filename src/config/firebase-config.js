// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjQVgmk8ltdwIOpGtos4aZSy_55EVIQSQ",
  authDomain: "expense-tracker-41596.firebaseapp.com",
  projectId: "expense-tracker-41596",
  storageBucket: "expense-tracker-41596.appspot.com",
  messagingSenderId: "1095628349050",
  appId: "1:1095628349050:web:ad17acdf2857b4caa765c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db=getFirestore(app);

// firebase login
//firebase init
//firebase deploy