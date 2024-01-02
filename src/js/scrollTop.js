const goToTopButton = document.querySelector('.go-to-top');
goToTopButton.style.display = 'none';

function showGoToTopButton() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    goToTopButton.style.display = 'block';
  } else {
    goToTopButton.style.display = 'none';
  }
}

export function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}

goToTopButton.addEventListener('click', scrollToTop);
window.addEventListener('scroll', showGoToTopButton);
