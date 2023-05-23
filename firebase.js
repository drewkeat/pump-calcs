// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa_b7NzMI6FgNEGIRUxxevpGFHd32TWpE",
  authDomain: "pump-calcs-1.firebaseapp.com",
  projectId: "pump-calcs-1",
  storageBucket: "pump-calcs-1.appspot.com",
  messagingSenderId: "526020444021",
  appId: "1:526020444021:web:e810bba56e67f46e659d3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

exports = {app, db}