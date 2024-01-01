import '../../main.css';
import '../home_page/fetch.js';
import '../support-ukraine.js';
import '../fundation_api.js';
import '../dark-mode.js';
import '../buger-modal.js';
import '../auth/auth.js';
import '../auth/auth-form.js';

import { getBookByID } from '../home_page/fetch.js';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const firebaseConfig = {
  apiKey: 'AIzaSyDIt6ClvCkB36kNCs8suIEnlzg23Or1UqU',
  authDomain: 'book-project-8a976.firebaseapp.com',
  projectId: 'book-project-8a976',
  storageBucket: 'book-project-8a976.appspot.com',
  messagingSenderId: '595782127929',
  appId: '1:595782127929:web:e819e67d1654c476ec98e8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

const shoppingList = document.querySelector('.shopping-list');
const shoppingListBlock = document.querySelector('.shopping-list-block');
const firstPageBtn = document.querySelector('.first-page-btn');
const previousPageBtn = document.querySelector('.previous-page-btn');
const nextPageBtn = document.querySelector('.next-page-btn');
const lastPageBtn = document.querySelector('.last-page-btn');
const pageNumberFirstLabel = document.querySelector('.page-number-first');
const pageNumberSecondLabel = document.querySelector('.page-number-second');
const pageNumberThirdLabel = document.querySelector('.page-number-third');
const pageNumberMoreLabel = document.querySelector('.page-number-more');

let currentPage = parseInt(localStorage.getItem('shoppingListPage'));
let elementsPerPage = 3;
let pageAmount = 1;
let numberOfPageElements = 3;

if (!currentPage) {
  currentPage = 1;
}

const makeListOfShoppingListBooks = async function (data) {
  return (shoppingList.innerHTML = data
    .map(
      ({ author, book_image, title, description, _id, buy_links, list_name }) =>
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
  `,
    )
    .join(''));
};

const fetchShoppingElements = async (currentPage, elementsPerPage) => {
  shoppingListBlock.hidden = true;

  const shoppingArray = JSON.parse(localStorage.getItem('shoppingListArray'));

  if (!shoppingArray) {
    shoppingListBlock.hidden = false;
    console.log('Shopping list EMPTY!!!');
    return;
  }

  const integerDivision = Math.floor(shoppingArray.length / elementsPerPage);

  if (shoppingArray.length % elementsPerPage === 0) {
    pageAmount = integerDivision;
  } else {
    pageAmount = integerDivision + 1;
  }

  const filteredShoppingArray = shoppingArray.slice(
    (currentPage - 1) * elementsPerPage,
    currentPage * elementsPerPage,
  );

  const arrayOfPromises = shoppingArray.map(async bookId => {
    const response = await getBookByID(bookId);
    return response.data;
  });

  const shoppingElements = await Promise.all(arrayOfPromises);
  makeListOfShoppingListBooks(shoppingElements);
};

const shoppingListUpdate = () => {
  localStorage.setItem('shoppingListPage', currentPage);
  fetchShoppingElements(currentPage, elementsPerPage);
};

const firstPage = _ => {
  if (currentPage === 1) {
    return;
  }

  currentPage = 1;

  shoppingListUpdate();
  updatePageView();
};

const prevPage = _ => {
  if (currentPage <= 1) {
    return;
  }

  --currentPage;

  shoppingListUpdate();
  updatePageView(false);
};

const nextPage = _ => {
  if (currentPage >= pageAmount) {
    return;
  }

  ++currentPage;

  shoppingListUpdate();
  updatePageView();
};

const lastPage = _ => {
  if (currentPage === pageAmount) {
    return;
  }

  currentPage = pageAmount;

  shoppingListUpdate();
  updatePageView();
};

const pageNumberResetHighlight = _ => {
  pageNumberFirstLabel.dataset.highlight = false;
  pageNumberSecondLabel.dataset.highlight = false;
  pageNumberThirdLabel.dataset.highlight = false;
};

const updatePageView = (direction = true) => {
  pageNumberFirstLabel.hidden = false;
  pageNumberSecondLabel.hidden = false;
  pageNumberThirdLabel.hidden = false;
  pageNumberMoreLabel.hidden = true;

  if (numberOfPageElements === 2) {
    pageNumberResetHighlight();

    if (pageAmount < numberOfPageElements) {
      pageNumberSecondLabel.hidden = true;
      pageNumberThirdLabel.hidden = true;
    }

    if (direction === true) {
      pageNumberFirstLabel.textContent = currentPage;
      pageNumberFirstLabel.dataset.highlight = true;

      if (currentPage >= 1) {
        pageNumberSecondLabel.textContent = currentPage + 1;
      }
    } else {
      if (currentPage >= 2) {
        pageNumberSecondLabel.textContent = currentPage;
        pageNumberSecondLabel.dataset.highlight = true;
        pageNumberFirstLabel.textContent = currentPage - 1;
      } else {
        pageNumberFirstLabel.textContent = currentPage;
        pageNumberFirstLabel.dataset.highlight = true;
        pageNumberSecondLabel.textContent = currentPage + 1;
      }

      if (pageAmount > currentPage + numberOfPageElements - 1) {
        pageNumberMoreLabel.hidden = false;
      }
    }

    if (numberOfPageElements - 1 < currentPage && currentPage === pageAmount) {
      pageNumberFirstLabel.textContent = currentPage - (numberOfPageElements - 1);
      pageNumberSecondLabel.textContent = currentPage;
      pageNumberResetHighlight();
      pageNumberSecondLabel.dataset.highlight = true;
    }
  } else if (numberOfPageElements === 3) {
    if (pageAmount > currentPage + numberOfPageElements - 2) {
      pageNumberMoreLabel.hidden = false;
    }

    pageNumberResetHighlight();

    if (pageAmount < numberOfPageElements) {
      pageNumberThirdLabel.hidden = true;
    }

    if (direction === true) {
      pageNumberFirstLabel.textContent = currentPage - 1;
      pageNumberSecondLabel.textContent = currentPage;
      pageNumberSecondLabel.dataset.highlight = true;

      if (currentPage >= 1) {
        pageNumberSecondLabel.textContent = currentPage;
        pageNumberThirdLabel.textContent = currentPage + 1;
      }
    } else {
      if (currentPage >= 1) {
        pageNumberSecondLabel.textContent = currentPage;
        pageNumberSecondLabel.dataset.highlight = true;
        pageNumberFirstLabel.textContent = currentPage - 1;
        pageNumberThirdLabel.textContent = currentPage + 1;
      } else {
        pageNumberFirstLabel.textContent = currentPage;
        pageNumberFirstLabel.dataset.highlight = true;
        pageNumberSecondLabel.textContent = currentPage + 1;
        pageNumberThirdLabel.textContent = currentPage + 2;
      }
    }

    if (numberOfPageElements - 1 < currentPage && currentPage === pageAmount) {
      pageNumberFirstLabel.textContent = currentPage - (numberOfPageElements - 1);
      pageNumberSecondLabel.textContent = currentPage - (numberOfPageElements - 2);
      pageNumberThirdLabel.textContent = currentPage;
      pageNumberResetHighlight();
      pageNumberThirdLabel.dataset.highlight = true;
    }

    if (pageAmount > currentPage + numberOfPageElements) {
      pageNumberMoreLabel.hidden = false;
    }

    if (currentPage === 1) {
      pageNumberResetHighlight();
      pageNumberFirstLabel.textContent = currentPage;
      pageNumberFirstLabel.dataset.highlight = true;
      pageNumberSecondLabel.textContent = currentPage + 1;
      pageNumberThirdLabel.textContent = currentPage + 2;
    }
  }
};

const setPage = chosenPage => {
  currentPage = chosenPage;

  shoppingListUpdate();
  updatePageView();
};

fetchShoppingElements(currentPage, elementsPerPage);

window.addEventListener('load', () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      fetchShoppingElements(currentPage, elementsPerPage);
      updatePageView();
      console.log('User is signed in:', user);
    } else {
      alert('Nothing to display. Log in if you want to see book list');
      console('Signed out');
    }
  });
});

firstPageBtn.addEventListener('click', firstPage);
previousPageBtn.addEventListener('click', prevPage);
nextPageBtn.addEventListener('click', nextPage);
lastPageBtn.addEventListener('click', lastPage);
document.addEventListener('click', event => {
  if (event.target.classList.contains('page-number-element')) {
    setPage(parseInt(event.target.textContent));
  }
});
