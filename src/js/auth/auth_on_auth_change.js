import { onAuthStateChanged } from 'firebase/auth';
import { auth, app, db } from './auth';

onAuthStateChanged(auth, user => {
  if (user) {
    console.log('User is signed in:', user);
  } else {
    console.log('User is signed out');
  }
});
