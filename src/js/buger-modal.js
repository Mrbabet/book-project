// Funkcja otwierająca modal i zmieniająca ikony
function openModal() {
    document.getElementById('burgerModal').style.display = 'block';
    document.querySelector('.btn-burger').style.display = 'none';
    document.querySelector('.btn-close').style.display = 'block';
}

// Funkcja zamykająca modal i zmieniająca ikony
function closeModal() {
    document.getElementById('burgerModal').style.display = 'none';
    document.querySelector('.btn-burger').style.display = 'block';
    document.querySelector('.btn-close').style.display = 'none';
}

// Obsługa zdarzeń dla przycisków burgera i zamykania
document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.querySelector('.btn-burger');
    const closeButton = document.querySelector('.btn-close');

    burgerBtn.addEventListener('click', openModal);
    closeButton.addEventListener('click', closeModal);
});