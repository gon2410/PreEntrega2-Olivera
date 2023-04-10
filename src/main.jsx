import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyCGq8p58Qab4qVKcXlEJH1hKBVuqgc_23U",
    authDomain: "autos-4f628.firebaseapp.com",
    projectId: "autos-4f628",
    storageBucket: "autos-4f628.appspot.com",
    messagingSenderId: "1031580028380",
    appId: "1:1031580028380:web:c6c6703f8242fb5c315319",
    measurementId: "G-MH66BHXHM1"
};

// Initialize Firebase

initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)