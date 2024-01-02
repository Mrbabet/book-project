const goToTopButton = document.querySelector('.go-to-top');
goToTopButton.style.display = 'none';

function showGoToTopButton() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    goToTopButton.style.display = 'block';
  } else {
    goToTopButton.style.display = 'none';
  }
}

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

goToTopButton.addEventListener('click', backToTop);
window.addEventListener('scroll', showGoToTopButton);

export function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}
