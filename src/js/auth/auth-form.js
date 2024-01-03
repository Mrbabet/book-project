import { onAuthStateChanged } from 'firebase/auth';
import { userSignUp, userSignIn, userSignOut, auth } from './auth';
import '../sign-form';
import { closeModalButton, hideModal, showModal } from '../sign-form';
import { signInButton } from '../sign-form';

const authorizationModal = document.querySelector('.form-wrapper');
const submitBtn = document.querySelector('.submit-btn');
const signUpForm = document.querySelector('.sign-up-form');
const userName = document.querySelector('#name');
const userEmail = document.querySelector('input[type="email"]');
const userPassword = document.querySelector('input[type="password"]');
const signInBtn = document.querySelector('.sign-in-btn');
const signUpBtn = document.querySelector('.sign-up-btn');
const headerSignUpBtn = document.querySelector('.sign-up');

const userNameContainer = document.querySelector('.form-item-render');
const inputName = document.getElementById('name');
const menuContainer = document.querySelector('.menu');

const onSignUpBtnClick = function () {
  submitBtn.textContent = 'Sign up';
  userNameContainer.style.display = 'block';
};
const onSignInBtnClick = function () {
  submitBtn.textContent = 'Sign in';
  userNameContainer.style.display = 'none';
  inputName.removeAttribute('required');
};

signUpForm.addEventListener('submit', e => {
  e.preventDefault();

  if ((submitBtn.textContent = 'Sign up')) {
    const { value: username } = userName;
    const { value: email } = userEmail;
    const { value: password } = userPassword;

    if (email !== '' && password !== '' && username !== '') {
      userSignUp(username, email, password);
    }
  }
  if ((submitBtn.textContent = 'Sign in')) {
    const { value: email } = userEmail;
    const { value: password } = userPassword;

    if (email !== '' && password !== '') {
      userSignIn(email, password);
    }
  }
  signUpForm.reset();
  hideModal();
  onSignUpBtnClick();
});

window.addEventListener('load', () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log(user);
      menuContainer.classList.add('is-authenticated');
      headerSignUpBtn.textContent = user.displayName;
      headerSignUpBtn.addEventListener('click', userSignOut);
    } else {
      hideModal();
      menuContainer.classList.remove('is-authenticated');
      headerSignUpBtn.innerHTML = `<p class="sign-up-p">Sign up</p>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3.33325 10H16.6666M16.6666 10L11.6666 5M16.6666 10L11.6666 15" stroke="#EAC645" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`;
      if (headerSignUpBtn.textContent === 'Sign up') {
        signInButton.addEventListener('click', showModal);
      }
    }
  });
});

signInBtn.addEventListener('click', onSignInBtnClick);
signUpBtn.addEventListener('click', onSignUpBtnClick);
