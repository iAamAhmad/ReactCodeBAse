/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBT9GiYCRUt9pMIkr1LJZi2SrhDIgNQQR4",
    authDomain: "linkedin-clone-4a673.firebaseapp.com",
    projectId: "linkedin-clone-4a673",
    storageBucket: "linkedin-clone-4a673.appspot.com",
    messagingSenderId: "473864406087",
    appId: "1:473864406087:web:f4f8a7f2d5ef0292791d62"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { firebase, db, auth };
