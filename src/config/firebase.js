// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCouTEE5E2QBwQgTxTbWI4TxqWIdbX5e-4",
  authDomain: "employee-database-567b3.firebaseapp.com",
  projectId: "employee-database-567b3",
  storageBucket: "employee-database-567b3.appspot.com",
  messagingSenderId: "367445885614",
  appId: "1:367445885614:web:5bc226ec5f159341aae33f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)