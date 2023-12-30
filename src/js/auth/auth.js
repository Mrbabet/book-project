import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword,signOut } from "firebase/auth";
import { onAuthStateChanged } from 'firebase/auth';
import { getDatabase, set, ref, update } from 'firebase/database';


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
const auth = getAuth(app);




export const userSignUp = async function(username,email,password){
try {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
     
      console.log(user)
      alert(`Your account: ${username} has been created`)
    })
} 
catch (error) {
  const errorCode = error.code;
  const errorMessage = error.message;
}}




export const userSignIn = async function(email,password){
  try {
      const userCredential = await signInWithEmailAndPassword(auth,email,password) 
      const user = userCredential.user



    alert(`Your logged in successfully`)
    
  } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage)
  }
  

}
export const userSignOut = function(){
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}


// signIn('test@test.com','test1234')



// Use onAuthStateChanged to detect the user's login state
onAuthStateChanged(auth, (user) => {
    if (user) {
  
        console.log('User is signed in:', user);
    } else {
        // User is signed out
        console.log('User is signed out');
    }
});