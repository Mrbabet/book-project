import { initializeApp } from 'firebase/app';
import { getAuth, updateProfile } from 'firebase/auth';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { Notify } from 'notiflix';
import { showLoadingIndicator } from '../loader';

import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
  updateDoc,
  getDoc,
} from 'firebase/firestore';

// Notify Options
const notifyOptions = {
  fontFamily: 'DMSans',
  zindex: 10001,
  clickToClose: true,
  position: 'center-top',
};
const delay = 2500;

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: 'AIzaSyDIt6ClvCkB36kNCs8suIEnlzg23Or1UqU',
  authDomain: 'book-project-8a976.firebaseapp.com',
  projectId: 'book-project-8a976',
  storageBucket: 'book-project-8a976.appspot.com',
  messagingSenderId: '595782127929',
  appId: '1:595782127929:web:e819e67d1654c476ec98e8',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();

export const userSignUp = async function (username, email, password) {
  try {
    createUserWithEmailAndPassword(auth, email, password).then(async userCredential => {
      const user = userCredential.user;
      const userDocRef = doc(db, 'users', user.uid);

      updateProfile(user, {
        displayName: username,
      })
        .then(() => {})
        .catch(error => {});

      await setDoc(userDocRef, {
        username: username,
        email: email,
        shoppingListArray: [],
        userId: userCredential.user.uid,
      });
      Notify.success('Congratulation - you are registered!', notifyOptions);
      Notify.success(`You sign in!`, notifyOptions);
      showLoadingIndicator();
      setTimeout(() => {
        location.reload();
      }, delay);
    });
  } catch (error) {
    if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
      return Notify.failure(`You have already used this email!`, notifyOptions);
    }
  } finally {
    setTimeout(() => {
      location.reload();
    }, delay);
  }
};

export const userSignIn = async function (email, password) {
  try {
    signInWithEmailAndPassword(auth, email, password).then(async userCredential => {
      const user = userCredential.user;

      const lastLoginDate = new Date();
      const userDocRef = doc(collection(db, 'users'), user.uid);

      await updateDoc(userDocRef, {
        last_login: lastLoginDate,
      });

      Notify.success(`Signing in!`, notifyOptions);
      showLoadingIndicator();

      setTimeout(() => {
        location.reload();
      }, delay);
    });
  } catch (error) {
    if (error.message === 'Firebase: Error (auth/wrong-password).') {
      return Notify.failure(`Wrong password!`, notifyOptions);
    }
    if (error.message === 'Firebase: Error (auth/user-not-found).') {
      return Notify.failure(`You should sign up before!`, notifyOptions);
    }
  }
};
export function userSignOut() {
  const reloadDelay = 2500;
  signOut(auth)
    .then(() => {
      showLoadingIndicator();
      setTimeout(() => {
        location.reload();
      }, reloadDelay);
    })
    .catch(error => {
      console.log(error, 'Something went wrong');
    });
}

onAuthStateChanged(auth, user => {
  if (user) {
    console.log('User is signed in:', user);
  } else {
    console.log('User is signed out');
  }
});
