// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
    apiKey: "AIzaSyAvwTqG5KPAxDx9YubEsK3E66rL4TZWe04",
    authDomain: "clone-e29ea.firebaseapp.com",
    projectId: "clone-e29ea",
    storageBucket: "clone-e29ea.appspot.com",
    messagingSenderId: "1082255451719",
    appId: "1:1082255451719:web:65199299101a0cced23362",
    measurementId: "G-2NHTX06CFJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);