import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAeketPMAJLTwDFZH_tDEeDTsbAszWLDSw",
  authDomain: "marsis-186bd.firebaseapp.com",
  projectId: "marsis-186bd",
  storageBucket: "marsis-186bd.appspot.com",
  messagingSenderId: "996859278922",
  appId: "1:996859278922:web:370482436e4112e05d18b3",
  measurementId: "G-EQS4TWS23V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)