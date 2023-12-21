import Swiper from 'swiper';
import 'swiper/swiper.css';

import { supporters } from './fundation_api';

const supportersWrapper = document.querySelector('.suporters-wrapper');
const supportersBtn = document.querySelector('.suporters-button');

const swiperOptions = {
  direction: 'vertical',
  navigation: {
    nextEl: '.swiper-button-next',
  },
  rewind: true,
  allowTouchMove: false,
  spaceBetween: 20,
  slidesPerView: 'auto',
  slidesPerGroup: 4,
  breakpoints: {
    768: {
      slidesPerGroup: 6,
    },
  },
};
const swiper = new Swiper('.swiper', swiperOptions);

const markup = supporters
  .map(
    (el, index) =>
      `<div class ="supporters__item swiper-slide">
      <span class="supporters__number">
      ${(index + 1).toString().padStart(2, '0')}
        </span>
        <a href = "${el.url}" title = "${
        el.title
      }" target='_blank' rel="noopener noreferrer nofollow" aria-label="Link to support fundation">
      <img src ="${el.img}" class="supporters__img" alt = "${el.title} logo"/>
      </a>
      </div>`,
  )
  .join('');

supportersWrapper.innerHTML = markup;

function onBtnClick() {
  swiper.slideNext();
  if (swiper.isBeginning || swiper.isEnd) {
    rotateBtn();
  }
}

function rotateBtn() {
  refs.btn.classList.toggle('supporters__btn--up');
}
supportersBtn.addEventListener('click', onBtnClick);
