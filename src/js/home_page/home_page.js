import { ShowLessData, makeCategoryPage } from './func';
import { renderCategoryList } from './func';
import { renderBooksItems } from './func';
import { currentCategoryToggle } from './func';
import { getCategoryList, getOneCategory, getTopBooks } from './fetch';

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
      '<h2 class="block__books-title">Best Sellers<span class="block__books-colortitle"> Books</span></h2>',
    );
    refBooks.insertAdjacentHTML('beforeend', (await renderBooksItems(resp.data)).join(''));

    ShowLessData(resp.data);
    return resp.data;
  } catch (error) {}
}

refCategory.addEventListener('click', onCategoryClick);

async function onCategoryClick(el) {
  el.preventDefault();

  if (el.target.classList.contains('category__home-item')) {
    refBooks.innerHTML = '';

    if (el.target.dataset.category === `all categories`) {
      try {
        const resp = await getTopBooks();
        refBooks.insertAdjacentHTML(
          'afterbegin',
          '<h2 class="block__books-title">Best Sellers<span class="block__books-colortitle"> Books</span></h2>',
        );
        refBooks.insertAdjacentHTML('beforeend', (await renderBooksItems(resp.data)).join(''));
        currentCategoryToggle(el.target.dataset.category);
      } catch (error) {}
      return;
    } else {
      try {
        const data = await (await getOneCategory(el.target.dataset.category)).data;
        refBooks.insertAdjacentHTML(
          'beforeend',
          await makeCategoryPage(el.target.dataset.category, data),
        );
        currentCategoryToggle(el.target.dataset.category);
      } catch (error) {}
    }
  }
}
