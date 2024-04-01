import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVT-PJMLdI6oDY8SqY3RE9wbTrdvwyL_Q",
  authDomain: "x-with-pompompurin.firebaseapp.com",
  projectId: "x-with-pompompurin",
  storageBucket: "x-with-pompompurin.appspot.com",
  messagingSenderId: "5594634689",
  appId: "1:5594634689:web:8c02eb4202e73bec22b740",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
