import { updateProfile } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
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

import { app, auth, db } from './auth';

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
