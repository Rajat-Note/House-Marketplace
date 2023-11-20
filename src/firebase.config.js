import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB6m-2i_7ntU55ylM_WMZirJb9RYlkGz8I",
  authDomain: "house-marketplace-app-73aa4.firebaseapp.com",
  projectId: "house-marketplace-app-73aa4",
  storageBucket: "house-marketplace-app-73aa4.appspot.com",
  messagingSenderId: "430062287528",
  appId: "1:430062287528:web:829593107d523c3571a09d"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();