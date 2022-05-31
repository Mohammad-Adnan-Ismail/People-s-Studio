// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAYjiJlVDr7oiYChx--scZ_8vOLf8OWBbI",
    authDomain: "people-s-studio.firebaseapp.com",
    projectId: "people-s-studio",
    storageBucket: "people-s-studio.appspot.com",
    messagingSenderId: "282932567280",
    appId: "1:282932567280:web:d5465fb2e04dcb6c15b635"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;