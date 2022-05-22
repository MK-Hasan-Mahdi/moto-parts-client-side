// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZeMKsQ9K_zx301TXzMBvuV6LEtgFqYP0",
    authDomain: "moto-parts-c1806.firebaseapp.com",
    projectId: "moto-parts-c1806",
    storageBucket: "moto-parts-c1806.appspot.com",
    messagingSenderId: "777641450617",
    appId: "1:777641450617:web:ec03805c2bc0c5051788a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;