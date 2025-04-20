import * as dotenv from 'dotenv'
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

dotenv.config();

const firebaseConfig = {
    apiKey: process.env.VUE_APP_API_KEY,
    authDomain: process.env.VUE_APP_API_KEY ,
    projectId: process.env.VUE_APP_API_KEY ,
    storageBucket: process.env.VUE_APP_API_KEY ,
    messagingSenderId: process.env.VUE_APP_API_KEY ,
    appId: process.env.VUE_APP_API_KEY ,
    measurementId: process.env.VUE_APP_API_KEY 
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };