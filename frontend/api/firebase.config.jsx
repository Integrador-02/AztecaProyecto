// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv7avy30x7vGxWXzm8ysy4BIGu1mJcX5k",
  authDomain: "proyectoazteca-b22ed.firebaseapp.com",
  projectId: "proyectoazteca-b22ed",
  storageBucket: "proyectoazteca-b22ed.appspot.com",
  messagingSenderId: "799312966199",
  appId: "1:799312966199:web:504985f72fd2a72393c5b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)