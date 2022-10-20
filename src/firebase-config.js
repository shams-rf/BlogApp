import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCBAag9SZQBhEIbold_7_YXyiq3IeSjqeE",
    authDomain: "blogapp-79824.firebaseapp.com",
    projectId: "blogapp-79824",
    storageBucket: "blogapp-79824.appspot.com",
    messagingSenderId: "353473575597",
    appId: "1:353473575597:web:1b08a0831f85934f17e424"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();