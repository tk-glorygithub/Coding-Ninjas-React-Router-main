import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdulftbLDkQ_azaFXx_mlRNMPxtlQr5_E",
  authDomain: "lms-videos-9360a.firebaseapp.com",
  projectId: "lms-videos-9360a",
  storageBucket: "lms-videos-9360a.appspot.com", // Corrected storageBucket URL
  messagingSenderId: "263851220974",
  appId: "1:263851220974:web:92d0b890484df19af8f8ff",
  measurementId: "G-93RLDBVRD0",
  databaseURL: "https://lms-videos-9360a-default-rtdb.firebaseio.com",
};

// Initialize Firebase app
export const app = initializeApp(firebaseConfig);

// Initialize Firebase services using the initialized app
const auth = getAuth(app); 
const db = getFirestore(app);

export { auth, db };
