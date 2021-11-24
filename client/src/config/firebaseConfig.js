import { initializeApp } from "firebase/app";
import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    updateEmail,
    updatePassword,
    sendSignInLinkToEmail,
    sendEmailVerification,
    setPersistence,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAcvZ8l_W3GQdJrFJ1OLBluNgqYTM9bj_o",
  authDomain: "vinyled-266bb.firebaseapp.com",
  projectId: "vinyled-266bb",
  storageBucket: "vinyled-266bb.appspot.com",
  messagingSenderId: "632104488758",
  appId: "1:632104488758:web:5be452823240a850c82d97"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const authService = {
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    updateEmail,
    updatePassword,
    sendSignInLinkToEmail,
    sendEmailVerification,
    setPersistence,
};

export default app;