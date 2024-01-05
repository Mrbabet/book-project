import { signInWithEmailAndPassword } from 'firebase/auth';
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
