import Swiper from 'swiper';
import 'swiper/swiper.css';
import { supportersArray } from '../fundation_api';

const swiperOptions = {
  direction: 'vertical',
  navigation: {
    nextEl: '.swiper-button-next',
  },
  rewind: true,
  allowTouchMove: false,
  spaceBetween: 20,
  slidesPerView: 4,
  slidesPerGroup: 4,
  breakpoints: {
    768: {
      slidesPerView: 6,
      slidesPerGroup: 6,
    },
  },
};
const swiper = new Swiper('.swiper', swiperOptions);

const nextBtn = document.querySelector('.swiper-button-next');
const list = document.querySelector('.swiper-wrapper');
const btn = document.querySelector('.supporters-button');

const markup = supportersArray
  .map((el, index) => {
    return `<li class="supporters__item swiper-slide">
            <span class="supporters__number">${(index + 1).toString().padStart(2, '0')}</span>
            <a href="${el.url}" title="${
      el.title
    }" target='_blank' rel="noopener noreferrer nofollow" aria-label="Link to support fond">
              <img src="${el.img}" class="supporters__img" alt="${el.title} logo"/>
            </a>
          </li>`;
  })
  .join('');

list.innerHTML = markup;

function onBtnClick() {
  swiper.slideNext();
  if (swiper.isBeginning || swiper.isEnd) {
    rotateBtn();
  }
}

function rotateBtn() {
  btn.classList.toggle('supporters__btn--up');
}

nextBtn.addEventListener('click', onBtnClick);
