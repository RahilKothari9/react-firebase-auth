import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6u53Xathb8tgVyBXadCP5UuGcuZW5vFY",
  authDomain: "whatsfordinner-f7a4b.firebaseapp.com",
  projectId: "whatsfordinner-f7a4b",
  storageBucket: "whatsfordinner-f7a4b.appspot.com",
  messagingSenderId: "122865874158",
  appId: "1:122865874158:web:a812b075b7f6b4b49eefff",
  measurementId: "G-72SW30VR1C"
};

export const registerWithEmailAndPassword = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);