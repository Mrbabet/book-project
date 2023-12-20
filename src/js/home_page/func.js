export async function renderCategoryList(fetch) {
  return await fetch.data
    .map(({ list_name }) => {
      return `<li class="category__home-item" data-category="${list_name}">${list_name}</li>`;
    })
    .join('');
}

export async function renderBooksItems(data) {
  return await Promise.all(
    data.map(async ({ list_name, books }) => {
      return `
    <div class="item-books__home">
    <h3 class="js-book-category">${list_name}</h3>
    <ul class='list-books__home'>${await ShowLessData(books)}</ul>
    <button class="button see-more" data-js="${list_name}" aria-label="See more">See more</button>
    </div>
    `;
    }),
  );
}
function addMediaWidth() {
  const screenSize = window.screen.width;

  if (screenSize < 768) {
    return 'mobile';
  } else if (screenSize < 1200) {
    return 'tablet';
  } else {
    return 'desktop';
  }
}

export const ShowLessData = async function (data) {
  if (addMediaWidth() === 'mobile') {
    return makeListOfBooks(data.slice(0, 1));
  } else if (addMediaWidth() === 'tablet') {
    return makeListOfBooks(data.slice(0, 3));
  } else return makeListOfBooks(data);
};

export async function makeCategoryPage(category, data) {
  const titleWords = category.split(' ');
  const halfIndex = Math.ceil(titleWords / 2);
  const firstHalf = titleWords.slice(0, halfIndex).join('');
  const lastHalf = titleWords.slice(halfIndex).join('');

  return `
  <h2 class="block__books-title">${firstHalf} <span class="block__books-colortitle">${lastHalf}</span></h2>
  <ul class="block__books-list">${await makeListOfBooks(data)}</ul>
  <button class="button all-categories__btn" data-js="All Categories" aria-label="All categories">All Categories</button>
`;
}

export async function makeListOfBooks(data) {
  return data
    .map(({ author, book_image, title, description, _id }) => {
      return `<li class="books__itm" id=${_id} >
    <div class="books__wrapper">
    <img class="books__image" src="${book_image}"  alt="${description}" loading="lazy"  />
    <div class="books__overlay">
    <p class="books__overlay-text">QUICK VIEW</p>
    </div>
    </div>
    <div class="books__info">
    <p class="books__info-title">${title}</p>
    <p class="books__info-author">${author}</p>
    </div>
    </li>`;
    })
    .join('');
}

export async function currentCategoryToggle(value) {
  const currentCategoryElement = document.querySelector('.js-current-category');
  if (currentCategoryElement) {
    currentCategoryElement.classList.remove('js-current-category');
  }

  const newCategoryElement = document.querySelector(`li[data-category="${value}"]`);
  if (newCategoryElement) {
    newCategoryElement.classList.add('js-current-category');
  } else {
    console.error(`Element with category "${value}" not found.`);
  }
}
