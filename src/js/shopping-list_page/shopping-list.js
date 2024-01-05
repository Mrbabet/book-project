import '../../main.css';
import '../home_page/fetch.js';
import '../support-ukraine.js';
import '../fundation_api.js';
import '../dark-mode.js';
import '../buger-modal.js';
import '../auth/auth.js';
import '../auth/auth-form.js';
import '../auth/auth_on_auth_change.js';

import { getBookByID } from '../home_page/fetch.js';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, app, db } from '../auth/auth.js';
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
  updateDoc,
  getDoc,
  arrayUnion,
  arrayRemove,
  onSnapshot,
} from 'firebase/firestore';

const shoppingList = document.querySelector('.shopping-list-items');
const shoppingListEmpty = document.querySelector('.shopping-list-empty');
const shoppingListPagination = document.querySelector('.shopping-list-pagination');
const firstPageBtn = document.querySelector('.first-page-btn');
const previousPageBtn = document.querySelector('.previous-page-btn');
const nextPageBtn = document.querySelector('.next-page-btn');
const lastPageBtn = document.querySelector('.last-page-btn');
const pageNumberFirstLabel = document.querySelector('.page-number-first');
const pageNumberSecondLabel = document.querySelector('.page-number-second');
const pageNumberThirdLabel = document.querySelector('.page-number-third');
const pageNumberMoreLabel = document.querySelector('.page-number-more');
const tabletDesktopMedia = window.matchMedia('screen and (min-width: 768px)');
const pageHeader = document.querySelector('.dark-header');
const supportUkraine = document.querySelector('.supporters');

let currentPage = 1;
let elementsPerPage = 4;
let pageAmount = 1;
let numberOfPageElements = 3;
let shoppingArray = [];
let reversePageDirection = false;

const makeListOfShoppingListBooks = async function (data) {
  console.log(data);
  return (shoppingList.innerHTML = data
    .map(
      ({ author, book_image, title, description, _id, buy_links, list_name }) =>
        `
  <li class="shopping-list_item" id=${_id}>
    <div class="books__wrapper">
      <img class="sl__books__image" src="${book_image}" alt="${description}" loading="lazy"  />
    </div>
    <div class="books__info">
      <p class="books__info-title sl__books-title">${title}</p>
      <p class="books__listname">${list_name}</p>
      <p class = "books__desc">${description}</p>
      <a href ="${buy_links[0].url}"><button class ="sl__amazon"></button></a>
      <a href ="${buy_links[1].url}"><button class ="sl__apple-books"></button></a>
      <p class="books__info-author">${author}</p>
      <button class="trash-button" data-elementid=${_id}><svg class = "books__button-svg" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M6.75 2.25H11.25M2.25 4.5H15.75M14.25 4.5L13.724 12.3895C13.6451 13.5732 13.6057 14.165 13.35 14.6138C13.1249 15.0088 12.7854 15.3265 12.3762 15.5248C11.9115 15.75 11.3183 15.75 10.132 15.75H7.86799C6.68168 15.75 6.08852 15.75 5.62375 15.5248C5.21457 15.3265 4.87507 15.0088 4.64999 14.6138C4.39433 14.165 4.35488 13.5732 4.27596 12.3895L3.75 4.5M7.5 7.875V11.625M10.5 7.875V11.625" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
    </div>
  </li>
  `,
    )
    .join(''));
};

const fetchShoppingElements = async (currentPageNumber, elementsPerPageAmount) => {
  shoppingArray = JSON.parse(localStorage.getItem('shoppingListArray'));

  if (!shoppingArray || shoppingArray.length === 0) {
    currentPage = 0;
    shoppingListPagination.style.display = 'none';
    shoppingListEmpty.style.display = 'block';
    shoppingList.innerHTML = '';
    console.log('Shopping list EMPTY!!!');
    return;
  }

  shoppingListEmpty.style.display = 'none';

  const integerDivision = Math.floor(shoppingArray.length / elementsPerPageAmount);

  if (shoppingArray.length % elementsPerPageAmount === 0) {
    pageAmount = integerDivision;
  } else {
    pageAmount = integerDivision + 1;
  }

  if (currentPageNumber > pageAmount) {
    currentPageNumber = pageAmount;
    currentPage = pageAmount;
  }

  const filteredShoppingArray = shoppingArray.slice(
    (currentPageNumber - 1) * elementsPerPageAmount,
    currentPageNumber * elementsPerPageAmount,
  );

  const arrayOfPromises = filteredShoppingArray.map(async bookId => {
    const response = await getBookByID(bookId);
    return response.data;
  });

  const shoppingElements = await Promise.all(arrayOfPromises);
  makeListOfShoppingListBooks(shoppingElements);
};

const shoppingListUpdate = () => {
  sessionStorage.setItem('shoppingListPage', currentPage);
  fetchShoppingElements(currentPage, elementsPerPage);
  sessionStorage.setItem('shoppingListPage', currentPage);
};

const firstPage = _ => {
  if (currentPage <= 1) {
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
  if (currentPage <= 0) {
    return;
  }

  pageNumberFirstLabel.style.display = 'block';
  pageNumberSecondLabel.style.display = 'block';
  pageNumberThirdLabel.style.display = 'block';
  pageNumberMoreLabel.style.display = 'none';

  if (numberOfPageElements === 2) {
    pageNumberResetHighlight();
    pageNumberThirdLabel.style.display = 'none';

    if (pageAmount > currentPage + numberOfPageElements - 1) {
      pageNumberMoreLabel.style.display = 'block';
    }

    if (pageAmount < numberOfPageElements) {
      pageNumberSecondLabel.style.display = 'none';
    }

    if (direction === true && !reversePageDirection) {
      pageNumberFirstLabel.textContent = currentPage;
      pageNumberFirstLabel.dataset.highlight = true;

      if (currentPage >= 1) {
        pageNumberSecondLabel.textContent = currentPage + 1;
      }
    } else {
      if (currentPage >= 1 || reversePageDirection) {
        pageNumberSecondLabel.textContent = currentPage;
        pageNumberSecondLabel.dataset.highlight = true;
        pageNumberFirstLabel.textContent = currentPage - 1;

        if (parseInt(pageNumberSecondLabel.textContent) === pageAmount - 1) {
          pageNumberMoreLabel.style.display = 'block';
        }
      }
    }

    if (numberOfPageElements - 1 < currentPage && currentPage === pageAmount) {
      pageNumberFirstLabel.textContent = currentPage - (numberOfPageElements - 1);
      pageNumberSecondLabel.textContent = currentPage;
      pageNumberResetHighlight();
      pageNumberSecondLabel.dataset.highlight = true;
    }

    if (currentPage === 1) {
      pageNumberMoreLabel.style.display = 'none';
      if (pageAmount > currentPage + numberOfPageElements - 1) {
        pageNumberMoreLabel.style.display = 'block';
      }

      pageNumberResetHighlight();
      pageNumberFirstLabel.textContent = currentPage;
      pageNumberFirstLabel.dataset.highlight = true;
      pageNumberSecondLabel.textContent = currentPage + 1;
      pageNumberThirdLabel.textContent = currentPage + 2;
    }
  } else if (numberOfPageElements === 3) {
    pageNumberResetHighlight();

    if (pageAmount > currentPage + numberOfPageElements - 2) {
      pageNumberMoreLabel.style.display = 'block';
    }

    if (pageAmount < numberOfPageElements) {
      pageNumberThirdLabel.style.display = 'none';

      if (pageAmount < numberOfPageElements - 1) {
        pageNumberSecondLabel.style.display = 'none';
      }
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
      }
    }

    if (numberOfPageElements - 1 < currentPage && currentPage === pageAmount) {
      pageNumberFirstLabel.textContent = currentPage - (numberOfPageElements - 1);
      pageNumberSecondLabel.textContent = currentPage - (numberOfPageElements - 2);
      pageNumberThirdLabel.textContent = currentPage;
      pageNumberResetHighlight();
      pageNumberThirdLabel.dataset.highlight = true;
    }

    if (currentPage === 1) {
      pageNumberMoreLabel.style.display = 'none';
      if (pageAmount > currentPage + numberOfPageElements - 1) {
        pageNumberMoreLabel.style.display = 'block';
      }

      pageNumberResetHighlight();
      pageNumberFirstLabel.textContent = currentPage;
      pageNumberFirstLabel.dataset.highlight = true;
      pageNumberSecondLabel.textContent = currentPage + 1;
      pageNumberThirdLabel.textContent = currentPage + 2;
    }
  }
};

const setPage = chosenPage => {
  reversePageDirection = currentPage > chosenPage;
  currentPage = chosenPage;

  shoppingListUpdate();
  updatePageView();
  reversePageDirection = false;
};

const setShoppingElements = mediaElement => {
  if (mediaElement.matches) {
    elementsPerPage = 3;
    numberOfPageElements = 3;
  } else {
    elementsPerPage = 4;
    numberOfPageElements = 2;
  }
};

firstPageBtn.addEventListener('click', firstPage);
previousPageBtn.addEventListener('click', prevPage);
nextPageBtn.addEventListener('click', nextPage);
lastPageBtn.addEventListener('click', lastPage);
document.addEventListener('click', event => {
  if (event.target.classList.contains('page-number-element')) {
    setPage(parseInt(event.target.textContent));
  }
});

onAuthStateChanged(auth, async user => {
  if (user) {
    const uid = user.uid;
    const userRefDoc = doc(db, 'users', uid);
    const userData = (await getDoc(userRefDoc)).data();
    document.addEventListener('click', async event => {
      if (event.target.classList.contains('trash-button')) {
        console.log('click');
        if (
          userData &&
          userData.shoppingListArray &&
          userData.shoppingListArray.includes(event.target.dataset.elementid)
        ) {
          await updateDoc(userRefDoc, {
            shoppingListArray: arrayRemove(event.target.dataset.elementid),
          });
        }

        shoppingArray.splice(shoppingArray.indexOf(event.target.dataset.elementid), 1);
        localStorage.setItem('shoppingListArray', JSON.stringify(shoppingArray));
        shoppingListUpdate();
        updatePageView();
      }
    });
  } else {
    // console.log('User is signed out');
  }
});

window.addEventListener('load', () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      shoppingListUpdate();
      updatePageView();
    } else {
      window.location.href = './';
    }
  });
});

document.addEventListener('DOMContentLoaded', _event => {
  setShoppingElements(tabletDesktopMedia);
  pageHeader.dataset.pageName = 'shopping-list';
});

tabletDesktopMedia.addEventListener('change', _event => {
  setShoppingElements(tabletDesktopMedia);
  shoppingListUpdate();
  updatePageView();
});
