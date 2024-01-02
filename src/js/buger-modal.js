// Funkcja otwierająca modal i blokująca scrollowanie strony
function openModal() {
  document.getElementById('burgerModal').style.display = 'block';
  document.querySelector('.btn-burger').style.display = 'none';
  document.querySelector('.btn-close').style.display = 'block';
  document.body.style.overflow = 'hidden'; // Blokuje scrollowanie strony
}

// Funkcja zamykająca modal i przywracająca scrollowanie strony
function closeModal() {
  document.getElementById('burgerModal').style.display = 'none';
  document.querySelector('.btn-burger').style.display = 'block';
  document.querySelector('.btn-close').style.display = 'none';
  document.body.style.overflow = 'auto'; // Przywraca scrollowanie strony
}

// Obsługa zdarzeń dla przycisków burgera i zamykania
document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('.btn-burger');
  const closeButton = document.querySelector('.btn-close');

  burgerBtn.addEventListener('click', openModal);
  closeButton.addEventListener('click', closeModal);
});

window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  if (!e.matches) return;
  document.getElementById('burgerModal').style.display = 'none';
  document.querySelector('.btn-close').style.display = 'none';
  document.querySelector('.btn-burger').style.display = 'block';
});
