export async function renderCategoryList(fetch) {
  let allCategoryMarkup = `<li class="category-item js-current-category" data-category="All Categories">All Categories</li>`;
  return (allCategoryMarkup += fetch.data
    .map(({ list_name }) => {
      return `<li class="category-item"  data-category="${list_name}">${list_name}</li>`;
    })
    .join(''));
}

export async function renderBooksItems(data) {
  return await Promise.all(
    data.map(async ({ list_name, books }) => {
      return `
    <div class="book-category-container">
    <h3 class="js-book-category">${list_name}</h3>
    <ul class='books-list'>${await ShowLessData(books)}</ul>
    <button class="button see-more" data-js="${list_name}" aria-label="See more">See more</button>
    </div>
    `;
    }),
  );
}

//Popracować nad tą funkcją !!!

function addMediaWidth() {
  const screenSize = window.screen.width;

  window.addEventListener('resize', () => {
    if (
      (window.innerWidth > 767 && screenSize < 768) ||
      (window.innerWidth > 1279 && screenSize < 1280) ||
      (window.innerWidth < 1279 && screenSize > 1280) ||
      (window.innerWidth > 1439 && screenSize < 1440) ||
      (window.innerWidth < 1439 && screenSize > 1440)
    ) {
      location.reload();
    }
  });

  if (screenSize < 768) {
    return 'mobile';
  } else if (screenSize < 1280) {
    return 'tablet';
  } else if (screenSize < 1440) {
    return 'desktop';
  } else {
    return 'desktopXl';
  }
}

export const ShowLessData = async function (data) {
  if (addMediaWidth() === 'mobile') {
    return makeListOfBooks(data.slice(0, 1));
  } else if (addMediaWidth() === 'tablet') {
    return makeListOfBooks(data.slice(0, 3));
  } else if (addMediaWidth() === 'desktop') {
    return makeListOfBooks(data.slice(0, 4));
  } else {
    return makeListOfBooks(data);
  }
};

export async function makeCategoryPage(category, data) {
  const titleWords = category.split(' ');
  const halfIndex = Math.ceil(titleWords.length / 2);
  const firstHalf = titleWords.slice(0, halfIndex).join(' ');
  const lastHalf = titleWords.slice(halfIndex).join(' ');

  return `
  <h2 class="books-title">${firstHalf} <span class="books-colortitle">${lastHalf}</span></h2>
  <ul class="books-list">${await makeListOfBooks(data)}</ul>
  <button class="button all-categories__btn" data-js="All Categories" aria-label="All categories">All Categories</button>
`;
}

export async function makeListOfBooks(data) {
  return data
    .map(
      ({ author, book_image, title, description, _id }) => `
    <li class="books__item" data-aos="zoom-in"  data-aos-easing="ease-out-cubic" id=${_id}>
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
    </li>
    `,
    )
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
