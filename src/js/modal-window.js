import { getBookByID } from './home_page/fetch';
import { onAuthStateChanged } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import {auth, app, firebaseConfig } from './auth/auth';



const bookIMG = document.getElementById('bookImage');
const bookTitle = document.getElementById('bookTitle');
const bookAuthor = document.getElementById('bookAuthor');
const bookDescription = document.getElementById('bookDescription');
const linkAmazon = document.querySelector('.link-amazon');
const linkBook = document.querySelector('.link-apple');
const toggleButton = document.getElementById('toggleShoppingList');
const anonymousUser = document.querySelector('.toggle-shopping-list_anonymous-user-content')

// Funkcja inicjująca modal z danymi książki
export async function initModal(bookId) {
  const { data: book } = await getBookByID(bookId);

  bookIMG.attributes.src.value = book.book_image;
  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  bookDescription.insertAdjacentHTML('beforeend', book.description) 

  

  linkAmazon.attributes.href.value = book.buy_links[0].url;
  linkBook.attributes.href.value = book.buy_links[1].url;
  
  

  onAuthStateChanged(auth, (user) => {
    if (user) {
  
     toggleButton.disabled = false
     anonymousUser.style.display = 'none'
    } else {

    toggleButton.disabled = true
    anonymousUser.style.display = 'block'
      
    }
  });


 
  

 
  let shoppingList = JSON.parse(localStorage.getItem('shoppingListArray'));
  let isBookInList = false;
  if (shoppingList) {
    isBookInList = shoppingList.indexOf(bookId) !== -1;
  }

  toggleButton.textContent = isBookInList
    ? 'Remove from the shopping list'
    : 'Add to the shopping list';
  toggleButton.onclick = () => {
    
    if (!shoppingList) {
      toggleButton.textContent = 'Remove from the shopping list';
      shoppingList = [];
      shoppingList.push(bookId);
      localStorage.setItem('shoppingListArray', JSON.stringify(shoppingList));
    } else {
      isBookInList = shoppingList.indexOf(bookId) !== -1;

      if (isBookInList) {
        shoppingList.splice(shoppingList.indexOf(bookId), 1);
        localStorage.setItem('shoppingListArray', JSON.stringify(shoppingList));
        toggleButton.textContent = 'Add to the shopping list';
      } else {
        shoppingList.push(bookId);
        localStorage.setItem('shoppingListArray', JSON.stringify(shoppingList));
        toggleButton.textContent = 'Remove from the shopping list';
      }

      if (shoppingList.length === 0) {
        localStorage.removeItem('shoppingListArray');
      }
    }
  };
}


export function showModal() {
  const backdrop = document.querySelector('[data-modal]');
  backdrop.classList.add('is-active');
  document.body.classList.add('no-scroll');
  backdrop.addEventListener('click', closeModalByClicking);
  document.body.addEventListener('keyup', closeModalByKey);
}

function closeModalByClicking(e) {
  const backdrop = document.querySelector('[data-modal]');
  const modalWindow = document.querySelector('[data-modal-window]');
  const closeBtn = document.querySelector('[data-modal-close]');
 

  if (
    e.target.closest('[data-modal-close]') === closeBtn
  ) {
    backdrop.classList.remove('is-active');
    document.body.classList.remove('no-scroll');

    backdrop.removeEventListener('click', closeModalByClicking);
    document.body.removeEventListener('keyup', closeModalByKey);
  }
}

function closeModalByKey(e) {
  const backdrop = document.querySelector('[data-modal]');

  const key = e.keyCode;
  if (key == 27) {
    backdrop.classList.remove('is-active');
    document.body.classList.remove('no-scroll');

    backdrop.removeEventListener('click', closeModalByClicking);
    document.body.removeEventListener('keyup', closeModalByKey);
  }
}

