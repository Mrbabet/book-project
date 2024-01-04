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
    getDoc(userRefDoc).then(doc => {
      const userData = doc.data();
      const localStorageBookIdData = localStorage.getItem('shoppingListArray');
      const localStorageArray = JSON.parse(localStorageBookIdData);
      console.log(localStorageArray);
      onSnapshot(userRefDoc, docSnapshot => {
        const data = docSnapshot.data();
        const databaseArray = data.shoppingListArray.push(localStorageArray);
        console.log(data);
        console.log(databaseArray);
      });
    });
    console.log('User is signed in:', user);
  } else {
    console.log('User is signed out');
  }
});
