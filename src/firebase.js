import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDhH90Xbshml-Gp5IMmAxxEcFILsURpjAc",
    authDomain: "discord-app-2020.firebaseapp.com",
    databaseURL: "https://discord-app-2020.firebaseio.com",
    projectId: "discord-app-2020",
    storageBucket: "discord-app-2020.appspot.com",
    messagingSenderId: "12440872512",
    appId: "1:12440872512:web:b85b9dbd13dfaa3000a1a5",
    measurementId: "G-CMZE97DXTP"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;