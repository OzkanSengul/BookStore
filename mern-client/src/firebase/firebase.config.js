// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfj915rIuNunzxoNysuBszGjQVf6v4ht4",
  authDomain: "mern-book-inventory-syst-5d027.firebaseapp.com",
  projectId: "mern-book-inventory-syst-5d027",
  storageBucket: "mern-book-inventory-syst-5d027.appspot.com",
  messagingSenderId: "408709649544",
  appId: "1:408709649544:web:03408bf1d37d097bfafb3d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
