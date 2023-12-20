import axios from 'axios';

const BASE_URL = 'https://books-backend.p.goit.global/books/';

export const getTopBooks = function () {
  return axios.get(`${BASE_URL}top-books`);
};
export const getCategoryList = function () {
  return axios.get(`${BASE_URL}category-list`);
};
export const getOneCategory = function (category) {
  return axios.get(`${BASE_URL}category?category=${category}`);
};
export const getBookByID = function (id) {
  return axios.get(`${BASE_URL}${id}`);
};
