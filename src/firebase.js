// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "x-next-72d7e.firebaseapp.com",
  projectId: "x-next-72d7e",
  storageBucket: "x-next-72d7e.appspot.com",
  messagingSenderId: "52397606890",
  appId: "1:52397606890:web:afb298b92aeb85fab1d493",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
