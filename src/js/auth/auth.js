import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

export const firebaseConfig = {
  apiKey: 'AIzaSyDIt6ClvCkB36kNCs8suIEnlzg23Or1UqU',
  authDomain: 'book-project-8a976.firebaseapp.com',
  projectId: 'book-project-8a976',
  storageBucket: 'book-project-8a976.appspot.com',
  messagingSenderId: '595782127929',
  appId: '1:595782127929:web:e819e67d1654c476ec98e8',
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
