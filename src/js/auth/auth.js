import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIt6ClvCkB36kNCs8suIEnlzg23Or1UqU",
  authDomain: "book-project-8a976.firebaseapp.com",
  projectId: "book-project-8a976",
  storageBucket: "book-project-8a976.appspot.com",
  messagingSenderId: "595782127929",
  appId: "1:595782127929:web:e819e67d1654c476ec98e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

console.log(db)
