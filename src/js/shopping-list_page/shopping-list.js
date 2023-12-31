import '../../main.css';
import '../home_page/fetch.js';
import '../support-ukraine.js';
import '../fundation_api.js';
import '../dark-mode.js';
import '../buger-modal.js';
import '../auth/auth.js'
import '../auth/auth-form.js'

import { getBookByID } from '../home_page/fetch.js';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyDIt6ClvCkB36kNCs8suIEnlzg23Or1UqU",
  authDomain: "book-project-8a976.firebaseapp.com",
  projectId: "book-project-8a976",
  storageBucket: "book-project-8a976.appspot.com",
  messagingSenderId: "595782127929",
  appId: "1:595782127929:web:e819e67d1654c476ec98e8"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);
 const auth = getAuth();



const shoppingList = document.querySelector('.shopping-list');
const shoppingListBlock = document.querySelector('.shopping-list-block');

const makeListOfShoppingListBooks = async function(data){
  return shoppingList.innerHTML = data.map(({ author, book_image, title, description, _id, buy_links,list_name }) => 
  `
  <li class="shopping-lisg__item" id=${_id}>
    <div class="books__wrapper">
      <img class="books__image" src="${book_image}"  alt="${description}" loading="lazy"  />
    </div>
    <div class="books__info">
      <p class="books__info-title">${title}</p>
      <p class="books__info-author">${author}</p>
      <p>${description}</p>
      <p>${buy_links[0].name}</p>
      <p>${buy_links[1].name}</p>
      <p>${buy_links[4].name}</p>
      <p>${list_name}</p>
      

    </div>
  </li>
  `
  ).join('')
}



const fetchShoppingElements = async () => {
  shoppingListBlock.hidden = true;

  const shoppingArray = JSON.parse(localStorage.getItem('shoppingListArray'));
  if (!shoppingArray) {
    shoppingListBlock.hidden = false;
    console.log('Shopping list EMPTY!!!');
    return;
  }

  const arrayOfPromises = shoppingArray.map(async bookId => {
    const response = await getBookByID(bookId);
    return response.data;
  });

const shoppingElements = await Promise.all(arrayOfPromises);
makeListOfShoppingListBooks(shoppingElements)
};


window.addEventListener('load', ()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      fetchShoppingElements();
      console.log('User is signed in:', user);
    
    } else {
       alert('Nothing to display. Log in if you want to see book list')
       console("Signed out")
    }
  });
})




