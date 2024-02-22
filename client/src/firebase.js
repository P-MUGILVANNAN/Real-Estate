
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-ba14a.firebaseapp.com",
  projectId: "real-estate-ba14a",
  storageBucket: "real-estate-ba14a.appspot.com",
  messagingSenderId: "897126105943",
  appId: "1:897126105943:web:42bbc8691fddb4da6b7412",
  measurementId: "G-VKLWDEGDG7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
