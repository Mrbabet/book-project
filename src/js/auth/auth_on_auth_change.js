import { onAuthStateChanged } from 'firebase/auth';
import { auth, app, db } from './auth';
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
  updateDoc,
  getDoc,
  arrayUnion,
  onSnapshot,
} from 'firebase/firestore';
import { signInButton } from '../sign-form';

onAuthStateChanged(auth, async user => {
  if (user) {
    const uid = user.uid;
    const userRefDoc = doc(db, 'users', uid);
    onSnapshot(userRefDoc, snapshot => {
      const userDoc = snapshot.data();
      let shoppingList = userDoc.shoppingListArray || [];
      console.log('auth', shoppingList);
      localStorage.setItem('shoppingListArray', JSON.stringify(shoppingList));
    });
    signInButton.classList.add('is-authenticated');
  } else {
    signInButton.classList.remove('is-authenticated');
  }
});
