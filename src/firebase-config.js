import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRg7NW3UDN8RvzF9Tf1tFViv47PY2XbOg",
  authDomain: "fir-tutorial-87540.firebaseapp.com",
  projectId: "fir-tutorial-87540",
  storageBucket: "fir-tutorial-87540.appspot.com",
  messagingSenderId: "405077292099",
  appId: "1:405077292099:web:f67843841a1dc6a53cd0f6",
  measurementId: "G-27Q3V3RFRM",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
