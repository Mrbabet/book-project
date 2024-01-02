const authorizationModal = document.querySelector('.form-wrapper');
export const signInButton = document.querySelector('.sign-up');
export const closeModalButton = document.querySelector('.au-modal-close');

export function showModal() {
  authorizationModal.style.display = 'block';
}
export function hideModal() {
  authorizationModal.style.display = 'none';
}
signInButton.addEventListener('click', showModal);
closeModalButton.addEventListener('click', hideModal);
