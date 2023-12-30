import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { onAuthStateChanged } from 'firebase/auth';
import { getDatabase, set, ref, update } from 'firebase/database';


const authorizationModal = document.querySelector('.form-wrapper');
const signInButton = document.querySelector('.sign-up');
const closeModalButton = document.querySelector('.au-modal-close');
const userName = document.querySelector('#name');
const userEmail = document.querySelector('input[type="email"]');
const userPassword = document.querySelector('input[type="password"]');



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



const signUp = async function(username,email,password){
  try {
      const userCredential = await createUserWithEmailAndPassword(auth,email,password) 
      const user = userCredential.user
      set(ref(db, '/users/' + user.uid), {
        username: username,
        email: email,
      });
      console.log(`Account: ${username} was created`)
  } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
  }

}
signUp('test1','test@test.com','test123')



const signIn = async function(email,password){
  try {
      const userCredential = await signInWithEmailAndPassword(auth,email,password) 
      const user = userCredential.user

      console.log(user)
    
  } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
  }
  

}



// Use onAuthStateChanged to detect the user's login state
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in
        console.log('User is signed in:', user);
    } else {
        // User is signed out
        console.log('User is signed out');
    }
});