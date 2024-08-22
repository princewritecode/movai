// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCh-G7CDr39-Emn0MVa4mmSNJjcIbZcOC0",
    authDomain: "movai-72f42.firebaseapp.com",
    projectId: "movai-72f42",
    storageBucket: "movai-72f42.appspot.com",
    messagingSenderId: "284460361543",
    appId: "1:284460361543:web:cb7c71b4fe0988f9904e62",
    measurementId: "G-TFFC8HBJWV"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
