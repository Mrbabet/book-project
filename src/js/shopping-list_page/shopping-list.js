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
import { onSnapshot } from 'firebase/firestore';

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

let currentPage = 1;
let elementsPerPage = 4;
let pageAmount = 1;
let numberOfPageElements = 3;
let shoppingArray = [];
let reversePageDirection = false;

const makeListOfShoppingListBooks = async function (data) {
  return (shoppingList.innerHTML = data
    .map(
      ({ author, book_image, title, description, _id, buy_links, list_name }) =>
        `
  <li class="shopping-list_item" id=${_id}>
    <div class="books__wrapper">
      <img class="books__image" src="${book_image}" alt="${description}" loading="lazy"  />
    </div>
    <div class="books__info">
      <p class="books__info-title">${title}</p>
      <p class="books__info-author">${author}</p>
      <p>${description}</p>
      <p>${buy_links[0].name}</p>
      <p>${buy_links[1].name}</p>
      <p>${buy_links[4].name}</p>
      <p>${list_name}</p>
      <button class="trash-button" data-elementid=${_id}>Trash</button>
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
  //console.log('Header id: ' + shoppingHeader.id);
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

  console.log('updatePageView numberOfPageElements: ' + numberOfPageElements);

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

document.addEventListener('click', event => {
  if (event.target.classList.contains('trash-button')) {
    shoppingArray.splice(shoppingArray.indexOf(event.target.dataset.elementid), 1);
    localStorage.setItem('shoppingListArray', JSON.stringify(shoppingArray));
    shoppingListUpdate();
    updatePageView();
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
  console.log('ELEMENTS PER PAGE:' + elementsPerPage);
  console.log('MAX_PAGE_NUMBER_ELEMENTS: ' + numberOfPageElements);
  shoppingListUpdate();
  console.log('ELEMENTS PER PAGE:' + elementsPerPage);
  console.log('MAX_PAGE_NUMBER_ELEMENTS: ' + numberOfPageElements);
  updatePageView();
  console.log(pageAmount);
  console.log('ELEMENTS PER PAGE:' + elementsPerPage);
  console.log('MAX_PAGE_NUMBER_ELEMENTS: ' + numberOfPageElements);
});
