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
      const userData = (await getDoc(userRefDoc)).data();

      if (toggleButtonClickHandler) {
        toggleButton.removeEventListener('click', toggleButtonClickHandler);
      }

      toggleButtonClickHandler = async e => {
        if (userData && userData.shoppingListArray && userData.shoppingListArray.includes(bookId)) {
          await updateDoc(userRefDoc, {
            shoppingListArray: arrayRemove(bookId),
          });
          toggleButton.textContent = 'Add to the shopping list';
        } else {
          await updateDoc(userRefDoc, {
            shoppingListArray: arrayUnion(bookId),
          });
          toggleButton.textContent = 'Remove from the shopping list';
        }
      };

      let shoppingList = userData.shoppingListArray || [];
      console.log('modal', shoppingList);
      localStorage.setItem('shoppingListArray', JSON.stringify(shoppingList));

      toggleButton.addEventListener('click', toggleButtonClickHandler);

      onSnapshot(userRefDoc, async docSnapshot => {
        const updatedData = docSnapshot.data();

        if (updatedData && updatedData.shoppingListArray) {
          shoppingList = updatedData.shoppingListArray;

          let isBookInList = shoppingList.indexOf(bookId) !== -1;
          toggleButton.textContent = isBookInList
            ? 'Remove from the shopping list'
            : 'Add to the shopping list';

          localStorage.setItem('shoppingListArray', JSON.stringify(shoppingList));
        }
      });

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
