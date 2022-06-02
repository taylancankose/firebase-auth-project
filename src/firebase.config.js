// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAbE20nSW0tyCDtNnPWqBRiCaTgfzSpnmY',
  authDomain: 'mtm-project-1.firebaseapp.com',
  projectId: 'mtm-project-1',
  storageBucket: 'mtm-project-1.appspot.com',
  messagingSenderId: '755240976920',
  appId: '1:755240976920:web:fb5ecd6889ae3361df796d',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
