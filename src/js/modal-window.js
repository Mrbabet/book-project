import { getBookByID } from './home_page/fetch';

const bookIMG = document.getElementById('bookImage');
const bookTitle = document.getElementById('bookTitle');
const bookAuthor = document.getElementById('bookAuthor');
const bookDescription = document.getElementById('bookDescription');
const linkAmazon = document.querySelector('.link-amazon');
const linkBook = document.querySelector('.link-apple');
const linkBookShop = document.querySelector('.link-book-shop');

// Funkcja inicjująca modal z danymi książki
export async function initModal(bookId) {
  const { data: book } = await getBookByID(bookId);

  bookIMG.attributes.src.value = book.book_image;
  bookTitle.textContent = book.title;
  bookAuthor.textContent = `Autor: ${book.author}`;
  bookDescription.textContent = book.description;

  linkAmazon.attributes.href.value = book.buy_links[0].url;
  linkAmazon.innerHTML = book.buy_links[0].name;
  linkBook.attributes.href.value = book.buy_links[1].url;
  linkBook.innerHTML = book.buy_links[1].name;
  linkBookShop.attributes.href.value = book.buy_links[4].url;
  linkBookShop.innerHTML = book.buy_links[4].name;

  // Obsługa przycisku dodawania do listy zakupów
  const toggleButton = document.getElementById('toggleShoppingList');
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

// Funkcja wyświetlająca modal
export function showModal() {
  document.getElementById('myModal').style.display = 'block';
}

// Funkcja ukrywająca modal
function hideModal() {
  document.getElementById('myModal').style.display = 'none';
}

// Obsługa zdarzeń dla przycisku zamykania i kliknięcia poza modalem
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('myModal');
  const closeButton = document.querySelector('.close');

  closeButton.onclick = () => hideModal();
  window.onclick = event => {
    if (event.target === modal) {
      hideModal();
    }
  };
});
