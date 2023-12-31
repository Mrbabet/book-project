import { initializeApp } from "firebase/app";
import {getAuth, updateProfile} from 'firebase/auth';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword,signOut } from "firebase/auth";
import { onAuthStateChanged } from 'firebase/auth';

import { getFirestore, collection,addDoc, doc, setDoc , updateDoc, getDoc} from 'firebase/firestore';




// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDIt6ClvCkB36kNCs8suIEnlzg23Or1UqU",
  authDomain: "book-project-8a976.firebaseapp.com",
  projectId: "book-project-8a976",
  storageBucket: "book-project-8a976.appspot.com",
  messagingSenderId: "595782127929",
  appId: "1:595782127929:web:e819e67d1654c476ec98e8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();

export const userSignUp = async function(username,email,password){
try {
  createUserWithEmailAndPassword(auth, email, password)
    .then(async(userCredential) => {
      const user = userCredential.user
      const userDocRef = doc(db, 'users', user.uid);

      updateProfile(user,{
        displayName: username
      }).then(()=>{

      }).catch((error)=>{
        
      })

      await setDoc(userDocRef, {
        username: username,
        email: email,
        shoppingListArray: [],
        userId: userCredential.user.uid
      });
      
      
      alert(`Your account: ${username} has been created`)
    })
} 
catch (error) {
  const errorCode = error.code;
  const errorMessage = error.message;
}}




export const userSignIn = async function(email,password){
  try {
    signInWithEmailAndPassword(auth,email,password).then(async (userCredential)=>{
      const user = userCredential.user

      const lastLoginDate = new Date();
      const userDocRef = doc(collection(db, 'users'), user.uid);

      // Use the updateDoc function to update specific fields in the Firestore document
      await updateDoc(userDocRef, {
        last_login: lastLoginDate,
      })

      alert(`Your logged in successfully`)
    })

   
    
  } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage)
  }
  


}
export function userSignOut(){
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}

onAuthStateChanged(auth, (user) => {
    if (user) {
      SignOutBtnContainer.style.display = 'flex'
        console.log('User is signed in:', user);
    } else {
       SignOutBtnContainer.style.display = 'none'
        console.log('User is signed out');
    }
});

