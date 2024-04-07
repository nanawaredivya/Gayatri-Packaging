import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCQAH4UGg6gGbmbd_GQErmheBUCrbQ3_eY",
  authDomain: "gayatri-packaging-2dcec.firebaseapp.com",
  projectId: "gayatri-packaging-2dcec",
  storageBucket: "gayatri-packaging-2dcec.appspot.com",
  messagingSenderId: "1015839902808",
  appId: "1:1015839902808:web:ce48d55b3b6c88a8084e2d",
  measurementId: "G-LTMZ3GHZ65"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);