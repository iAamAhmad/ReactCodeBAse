// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAoxlUocUdv3MD_fYu_wEGk6J1KvhsFkMU",
    authDomain: "netflix-clone-21d21.firebaseapp.com",
    projectId: "netflix-clone-21d21",
    storageBucket: "netflix-clone-21d21.appspot.com",
    messagingSenderId: "668232469232",
    appId: "1:668232469232:web:2dd2d995d2caacc9c3d035",
    measurementId: "G-88GJ34V87R"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { firebase, db, auth };