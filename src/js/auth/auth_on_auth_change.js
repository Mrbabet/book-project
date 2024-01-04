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

    // console.log('User is signed in:', user);
  } else {
    // console.log('User is signed out');
  }
});
