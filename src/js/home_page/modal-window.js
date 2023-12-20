import axios from 'axios';

// Definicja klasy BooksAPI
class BooksAPI {
  #BASE_URL = 'https://books-backend.p.goit.global/books/';

  getTopBooks = () => axios.get(`${this.#BASE_URL}top-books`);
  getBookByID = id => axios.get(`${this.#BASE_URL}${id}`);
} 

// Utworzenie instancji klasy BooksAPI
const api = new BooksAPI();

// Funkcja inicjująca modal z danymi książki
function initModal(bookData) {
  document.getElementById('bookImage').src = bookData.book_image;
  document.getElementById('bookTitle').textContent = bookData.title;
  document.getElementById('bookAuthor').textContent = `Autor: ${bookData.author}`;
  document.getElementById('bookDescription').textContent = bookData.description;

  // Wypełnienie linków do sklepów
  const buyLinksContainer = document.getElementById('buyLinks');
  buyLinksContainer.innerHTML = ''; // Wyczyść obecne linki
  bookData.buy_links.forEach(link => {
    const a = document.createElement('a');
    a.href = link.url;
    a.textContent = link.name;
    a.target = '_blank';
    buyLinksContainer.appendChild(a);
  });

  // Obsługa przycisku dodawania do listy zakupów
  const toggleButton = document.getElementById('toggleShoppingList');
  const isBookInList = localStorage.getItem(bookData.primary_isbn13);
  toggleButton.textContent = isBookInList ? 'USUŃ Z LISTY ZAKUPÓW' : 'DODAJ DO LISTY ZAKUPÓW';
  toggleButton.onclick = () => {
    if (isBookInList) {
      localStorage.removeItem(bookData.primary_isbn13);
      toggleButton.textContent = 'DODAJ DO LISTY ZAKUPÓW';
    } else {
      localStorage.setItem(bookData.primary_isbn13, JSON.stringify(bookData));
      toggleButton.textContent = 'USUŃ Z LISTY ZAKUPÓW';
    }
  };
}

// Funkcja wyświetlająca modal
function showModal() {
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
  window.onclick = (event) => {
    if (event.target == modal) {
      hideModal();
    }
  };
});

// Przykład użycia
api.getTopBooks().then(response => {
  const topBooks = response.data;
  if (topBooks.length > 0) {
    // Załaduj dane pierwszej książki z listy najlepszych książek
    initModal(topBooks[0]);
    showModal();
  }
}).catch(error => console.error(error));
