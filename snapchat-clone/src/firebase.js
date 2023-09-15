import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: "AIzaSyCkSkfNcBrtqLgW00Uyl-sHclNOM47Xejo",
    authDomain: "snapchat-cone.firebaseapp.com",
    projectId: "snapchat-cone",
    storageBucket: "snapchat-cone.appspot.com",
    messagingSenderId: "998779943260",
    appId: "1:998779943260:web:e657161a0bf57c284f2999",
    measurementId: "G-JDKY1QFJBQ"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GithubAuthProvider();

export { db, auth, storage, provider, firebase };