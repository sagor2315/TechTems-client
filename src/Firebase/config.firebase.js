// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC27rVNuxhX533f7YIqGGC-k5jifBNaA5Y",
    authDomain: "brand-shop-828d7.firebaseapp.com",
    projectId: "brand-shop-828d7",
    storageBucket: "brand-shop-828d7.appspot.com",
    messagingSenderId: "789948923132",
    appId: "1:789948923132:web:ce6330333397510e9b6b79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;