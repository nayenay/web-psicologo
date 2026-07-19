//inicializar Firebase
import { initializeApp, getApps, getApp } from "firebase/app";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

};

// Initialize Firebase

const app = !getApps().length
    ? initializeApp(firebaseConfig)
    : getApp();

export default app;