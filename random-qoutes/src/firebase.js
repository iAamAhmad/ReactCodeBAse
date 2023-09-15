// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA0AlqLxjj5Lq3ef7GqgkfQFHxLkICiRMY",
    authDomain: "quote-generator-24326.firebaseapp.com",
    projectId: "quote-generator-24326",
    storageBucket: "quote-generator-24326.appspot.com",
    messagingSenderId: "69683646833",
    appId: "1:69683646833:web:05edb6003ac4851349e6d0",
    measurementId: "G-3TR1TJKEDK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);