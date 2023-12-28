import '../main.css';
import './home_page/fetch.js';
import './home_page/support-ukraine.js';
import './fundation_api.js';
import './home_page/dark-mode.js';
import './buger-modal.js';
import { getBookByID } from './home_page/fetch.js';

const shoppingList = document.querySelector('.shopping-list');
const shoppingListBlock = document.querySelector('.shopping-list-block');

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
    return response;
  });

  const shoppingElements = await Promise.all(arrayOfPromises);
  shoppingList.innerHTML = shoppingElements
    .map(
      shoppingElement =>
        `<li>
        <p class="books-title">${shoppingElement.data.title}</p>
        <p class="books-category">${shoppingElement.data.list_name}</p>
        <p class="books__info-author">${shoppingElement.data.author}</p>
      </li>`,
    )
    .join('');

  console.log(shoppingElements);
};

fetchShoppingElements();
