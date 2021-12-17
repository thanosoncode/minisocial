import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-PsY0kaIJUUgrTRyFJeFQ_IVWAJIouoE",
  authDomain: "fir-auth-d0484.firebaseapp.com",
  projectId: "fir-auth-d0484",
  storageBucket: "fir-auth-d0484.appspot.com",
  messagingSenderId: "146846870041",
  appId: "1:146846870041:web:6126a6efb32e694cbbd888",
  measurementId: "G-GS1GSJ7DZB",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
