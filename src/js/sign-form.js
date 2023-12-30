const authorizationModal = document.querySelector('.form-wrapper');
const signInButton = document.querySelector('.sign-up');
const closeModalButton = document.querySelector('.au-modal-close');
const userName = document.querySelector('#name');
const userEmail = document.querySelector('input[type="email"]');
const userPassword = document.querySelector('input[type="password"]');

authorizationModal.style.display = 'none';

function showModal() {
  authorizationModal.style.display = 'block';
}
function hideModal() {
  authorizationModal.style.display = 'none';
}

signInButton.onclick = () => showModal();

closeModalButton.onclick = () => hideModal();
