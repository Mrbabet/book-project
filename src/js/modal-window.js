import { getBookByID } from './home_page/fetch';
import { onAuthStateChanged } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { auth, app, firebaseConfig } from './auth/auth';
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
  arrayRemove,
} from 'firebase/firestore';
import { auth, db, app } from './auth/auth';

const bookIMG = document.getElementById('bookImage');
const bookTitle = document.getElementById('bookTitle');
const bookAuthor = document.getElementById('bookAuthor');
const bookDescription = document.getElementById('bookDescription');
const linkAmazon = document.querySelector('.link-amazon');
const linkBook = document.querySelector('.link-apple');
export const toggleButton = document.getElementById('toggleShoppingList');
export const anonymousUser = document.querySelector('.toggle-shopping-list_anonymous-user-content');
let toggleButtonClickHandler;

export async function initModal(bookId) {
  const { data: book } = await getBookByID(bookId);

  bookIMG.attributes.src.value = book.book_image;
  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  bookDescription.insertAdjacentHTML('beforeend', book.description);

  linkAmazon.attributes.href.value = book.buy_links[0].url;
  linkBook.attributes.href.value = book.buy_links[1].url;

  onAuthStateChanged(auth, async user => {
    if (user) {
      const uid = user.uid;
      const userRefDoc = doc(db, 'users', uid);

      if (toggleButtonClickHandler) {
        toggleButton.removeEventListener('click', toggleButtonClickHandler);
      }

      toggleButtonClickHandler = async e => {
        e.preventDefault();
        if (e.target.textContent === 'Remove from the shopping list') {
          const updatedArray = arrayUnion(bookId);

          await updateDoc(userRefDoc, { shoppingListArray: updatedArray });
        } else {
          const updatedArray = arrayRemove(bookId);

          await updateDoc(userRefDoc, { shoppingListArray: updatedArray });
        }
      };

      const userDoc = (await getDoc(userRefDoc)).data();
      let shoppingList = userDoc.shoppingListArray || [];
      console.log('modal', shoppingList);
      localStorage.setItem('shoppingListArray', JSON.stringify(shoppingList));
      console.log(userDoc);

      toggleButton.addEventListener('click', toggleButtonClickHandler);

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

      toggleButton.disabled = false;
      anonymousUser.style.display = 'none';
    } else {
      toggleButton.disabled = true;
      anonymousUser.style.display = 'block';
    }
  });
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

  if (e.target.closest('[data-modal-close]') === closeBtn) {
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
