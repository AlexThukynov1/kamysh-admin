import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyACCE74w2M1tCEVRiCqK3tpeOHruxtsZDs",
    authDomain: "kamysh-test.firebaseapp.com",
    projectId: "kamysh-test",
    storageBucket: "kamysh-test.firebasestorage.app",
    messagingSenderId: "587277901696",
    appId: "1:587277901696:web:14fde14b32d400ceefab65",
    measurementId: "G-0B36RW18JN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };