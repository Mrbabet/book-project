import Swiper from 'swiper';

import { supporters } from './fundation_api';

const supportersContainer = document.querySelector('.suporters-container');

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
      <img src ="" class="supporters__img" alt = "${el.title} logo"/>
      </a>
      </div>`,
  )
  .join('');

supportersContainer.innerHTML = markup;
