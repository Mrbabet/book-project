import { onAuthStateChanged } from 'firebase/auth';

onAuthStateChanged(auth, user => {
  if (user) {
    console.log('User is signed in:', user);
  } else {
    console.log('User is signed out');
  }
});
