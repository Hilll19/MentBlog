// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "mentblog-9eaca.firebaseapp.com",
  projectId: "mentblog-9eaca",
  storageBucket: "mentblog-9eaca.appspot.com",
  messagingSenderId: "332119244531",
  appId: "1:332119244531:web:3b25c0f5e37f6ec3384186"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);