// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getFirestore,
    collection,
    addDoc,
    updateDoc,
    getDoc,
    deleteDoc,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDpf4Cfzl4CHJpxowvwJc-S47oiXhlmg9E",
    authDomain: "maltaac-df2cd.firebaseapp.com",
    projectId: "maltaac-df2cd",
    storageBucket: "maltaac-df2cd.appspot.com",
    messagingSenderId: "947853123868",
    appId: "1:947853123868:web:10723576d1aec33baa5ad9",
    measurementId: "G-MQJKXWE5S3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db, getFirestore,
    collection,
    addDoc,
    updateDoc,
    getDoc,
    deleteDoc };

