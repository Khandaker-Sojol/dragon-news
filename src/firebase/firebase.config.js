// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyG196VsqsKYsaB_JMFnJeoHAlHmhRl3I",
  authDomain: "dragon-news-90d64.firebaseapp.com",
  projectId: "dragon-news-90d64",
  storageBucket: "dragon-news-90d64.firebasestorage.app",
  messagingSenderId: "658465369259",
  appId: "1:658465369259:web:9b3d420cf27939fcc79bee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
