// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {getFirestore} from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxc5MuK18zTLqI82rQhp8DEmzSPmYMsEY",
  authDomain: "bank-32363.firebaseapp.com",
  databaseURL: "https://bank-32363-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bank-32363",
  storageBucket: "bank-32363.firebasestorage.app",
  messagingSenderId: "274820088416",
  appId: "1:274820088416:web:b1b511976029475b637905",
  measurementId: "G-4TWLWW0JPT"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
const analytics = getAnalytics(app);
export const auth = getAuth()
export const register = async (email: string, password: string)=>{
  const userCredential = await createUserWithEmailAndPassword(auth, email, password)
  return {user: userCredential.user}
}

export const login = async(email:string, password: string)=>{
    await signInWithEmailAndPassword(auth,email, password)
}

export const logout = () =>{
    signOut(auth)
}

// Initialize Firebase


