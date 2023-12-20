import axios from 'axios';

export class BooksAPI {
  #BASE_URL = 'https://books-backend.p.goit.global/books/';

  getTopBooks = () => axios.get(`${this.#BASE_URL}top-books`);
  getCategoryList = () => axios.get(`${this.#BASE_URL}category-list`);
  getOneCategory = category => axios.get(`${this.#BASE_URL}category?category=${category}`);
  getBookByID = id => axios.get(`${this.#BASE_URL}${id}`);
}
