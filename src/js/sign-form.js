const authorizationModal = document.querySelector('.form-wrapper');
const body = document.querySelector('body');
export const signInButton = document.querySelector('.sign-up');
export const closeModalButton = document.querySelector('.au-modal-close');
const signUpBtnMobile = document.querySelector('.modal-sign-up');
import { closeModal } from './buger-modal';

export function showModal() {
  authorizationModal.style.display = 'block';
}
export function hideModal() {
  authorizationModal.style.display = 'none';
}
signInButton.addEventListener('click', showModal);
closeModalButton.addEventListener('click', hideModal);
signUpBtnMobile.addEventListener('click', () => {
  closeModal();
  showModal();
});
