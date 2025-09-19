// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9PtANKwT_PZbvy7CzxUL8M_hfqxp2t-g",
  authDomain: "fit5032-week6-651ed.firebaseapp.com",
  projectId: "fit5032-week6-651ed",
  storageBucket: "fit5032-week6-651ed.firebasestorage.app",
  messagingSenderId: "121831707028",
  appId: "1:121831707028:web:a7a2f8ba538de63c677f81"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore()
export default db