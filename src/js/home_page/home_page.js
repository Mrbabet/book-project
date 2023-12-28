import { makeCategoryPage } from './func';
import { renderCategoryList } from './func';
import { renderBooksItems } from './func';
import { currentCategoryToggle } from './func';
import { getCategoryList, getOneCategory, getTopBooks } from './fetch';
import { initModal, showModal } from '../modal-window';
import { scrollToTop } from '../scrollTop';

const refBooks = document.querySelector('.books-container');
const refCategory = document.querySelector('.category-list');

init();

async function init() {
  try {
    const categoryApi = await getCategoryList();
    refCategory.insertAdjacentHTML('beforeend', await renderCategoryList(categoryApi));
  } catch (error) {}
  try {
    const resp = await getTopBooks();
    refBooks.insertAdjacentHTML(
      'afterbegin',
      '<h2 class="books-title">Best Sellers<span class="books-colortitle"> Books</span></h2>',
    );
    refBooks.insertAdjacentHTML('beforeend', (await renderBooksItems(resp.data)).join(''));
  } catch (error) {}
}

const onCategoryClick = async function (e) {
  e.preventDefault();

  if (e.target.classList.contains('category-item')) {
    refBooks.innerHTML = '';

    if (e.target.dataset.category === `All Categories`) {
      try {
        const resp = await getTopBooks();
        refBooks.insertAdjacentHTML(
          'afterbegin',
          '<h2 class="books-title">Best Sellers<span class="books-colortitle"> Books</span></h2>',
        );
        refBooks.insertAdjacentHTML('beforeend', (await renderBooksItems(resp.data)).join(''));
        currentCategoryToggle(e.target.dataset.category);
      } catch (error) {}
      return;
    } else {
      try {
        const { data } = await getOneCategory(e.target.dataset.category);
        refBooks.insertAdjacentHTML(
          'beforeend',
          await makeCategoryPage(e.target.dataset.category, data),
        );
        currentCategoryToggle(e.target.dataset.category);
      } catch (error) {}
    }
  }
};
const onSeeMoreClick = async function (e) {
  e.preventDefault();
  const currentEl = e.target.closest('.books__item');
  if (currentEl) {
    const bookId = currentEl.attributes.id.value;
    initModal(bookId);
    showModal();
  }
  const refsSeeMoreBtn = e.target.classList.contains('see-more');
  const refsAllCategoriesBtn = e.target.classList.contains('all-categories__btn');
  const clickedCategory = e.target.dataset.js;
  if (refsSeeMoreBtn) {
    scrollToTop();
    refBooks.innerHTML = '';
    try {
      const { data } = await getOneCategory(clickedCategory);
      refBooks.insertAdjacentHTML('beforeend', await makeCategoryPage(clickedCategory, data));
      currentCategoryToggle(clickedCategory);
    } catch (error) {}
  } else if (refsAllCategoriesBtn) {
    scrollToTop();
    refBooks.innerHTML = '';
    try {
      refBooks.insertAdjacentHTML(
        'afterbegin',
        '<h2 class="books-title">Best Sellers<span class="books-colortitle"> Books</span></h2>',
      );
      const resp = await getTopBooks();
      refBooks.insertAdjacentHTML('beforeend', (await renderBooksItems(resp.data)).join(''));
      currentCategoryToggle(clickedCategory);
    } catch (error) {}
  }
};

refCategory.addEventListener('click', onCategoryClick);
refBooks.addEventListener('click', onSeeMoreClick);
