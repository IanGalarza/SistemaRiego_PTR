import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"


// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "******",
    authDomain: "sistemariegoptr.firebaseapp.com",
    projectId: "sistemariegoptr",
    storageBucket: "sistemariegoptr.firebasestorage.app",
    messagingSenderId: "*******",
    appId: "*******"
};


const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
