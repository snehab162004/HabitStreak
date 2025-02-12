import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDrleFzFBpKOHzcCEwwMs452sFjyw2P8DY",
  authDomain: "habitstreak-b8667.firebaseapp.com",
  projectId: "habitstreak-b8667",
  storageBucket: "habitstreak-b8667.firebasestorage.app",
  messagingSenderId: "1078374568187",
  appId: "1:1078374568187:web:2cb7fbdeab3fc3f282e05e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();