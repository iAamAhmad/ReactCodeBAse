// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyC1DR7AD77RX-o1HgutC12SxuTZ4J7T-wM",
    authDomain: "tinder-8f2f0.firebaseapp.com",
    projectId: "tinder-8f2f0",
    storageBucket: "tinder-8f2f0.appspot.com",
    messagingSenderId: "140353409194",
    appId: "1:140353409194:web:bf497b0418e6f5416900d3",
    measurementId: "G-LKK26NQRQB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);