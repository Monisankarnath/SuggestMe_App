import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";
import "firebase/functions";

firebase.initializeApp({
    apiKey: "AIzaSyDJrgh8_XNN6qVsyhrHDmEzMDqyjhFUCcE",
    authDomain: "my-first-firebase-cf9ca.firebaseapp.com",
    projectId: "my-first-firebase-cf9ca",
    storageBucket: "my-first-firebase-cf9ca.appspot.com",
    messagingSenderId: "271524343771",
    appId: "1:271524343771:web:0d6ffb2b3a02946215c1fe"
})

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const functions= firebase.functions();

export default firebase;