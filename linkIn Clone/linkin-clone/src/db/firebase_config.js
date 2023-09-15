import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyDE7R8-ce_EaAIQm8fFiLWWY7mRVDSPLLI",
    authDomain: "linkin-clone-59f7c.firebaseapp.com",
    projectId: "linkin-clone-59f7c",
    storageBucket: "linkin-clone-59f7c.appspot.com",
    messagingSenderId: "56139494546",
    appId: "1:56139494546:web:fcb97374d563e5de9da24b",
    measurementId: "G-R89CKYK7MQ"
};

// Initialize Firebase
// eslint-disable-next-line no-mixed-operators
if (firebase.apps.length > 0 === false) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };