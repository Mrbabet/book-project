import '../../main.css';
import '../home_page/fetch.js';
import '../home_page/support-ukraine.js';
import '../fundation_api.js';
import '../home_page/dark-mode.js';
import '../buger-modal.js';
import { getBookByID } from '../home_page/fetch.js';

const shoppingList = document.querySelector('.shopping-list');
const shoppingListBlock = document.querySelector('.shopping-list-block');



const makeListOfShoppingListBooks = async function(data){
  console.log(data)
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

fetchShoppingElements();
