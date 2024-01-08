import { onAuthStateChanged } from 'firebase/auth';
import { userSignIn } from './auth_sign_in';
import { userSignOut } from './auth_sign_out';
import { userSignUp } from './auth_sign_up';
import '../sign-form';
import { closeModalButton, hideModal, showModal } from '../sign-form';
import { signInButton } from '../sign-form';
import { auth, app, db } from './auth';
import avatarIcon from '../../images/ellipse3.png';

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
const mobileMenuContainer = document.querySelector('.mobile-modal-menu');
const mobileSignUpBtn = document.querySelector('.modal-sign-up');
const mobileMenuUser = document.querySelector('.modal-user');
const mobileUsername = document.querySelector('.avatar-p');
const mobileLogOutBtn = document.querySelector('.menu-log-out ');

const avatar = document.querySelector('.avatar');

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
      menuContainer.classList.add('is-authenticated');
      mobileSignUpBtn.classList.add('is-authenticated');
      mobileLogOutBtn.classList.add('is-authenticated');
      mobileMenuUser.classList.add('is-authenticated');
      mobileMenuContainer.classList.add('is-authenticated');
      avatar.classList.add('is-authenticated');
      headerSignUpBtn.innerHTML = `
      <div class='user-icon-bg'><svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="ri:user-fill">
      <path id="Vector" d="M3.16663 17.4166C3.16663 15.7369 3.83389 14.126 5.02162 12.9383C6.20935 11.7506 7.82025 11.0833 9.49996 11.0833C11.1797 11.0833 12.7906 11.7506 13.9783 12.9383C15.166 14.126 15.8333 15.7369 15.8333 17.4166H3.16663ZM9.49996 10.2916C6.87558 10.2916 4.74996 8.166 4.74996 5.54163C4.74996 2.91725 6.87558 0.791626 9.49996 0.791626C12.1243 0.791626 14.25 2.91725 14.25 5.54163C14.25 8.166 12.1243 10.2916 9.49996 10.2916Z" fill="#4F2EE8"/>
      </g>
      </svg>
      </div>
      ${user.displayName}`;

      mobileUsername.textContent = user.displayName;

      headerSignUpBtn.addEventListener('click', userSignOut);
      mobileLogOutBtn.addEventListener('click', userSignOut);
    } else {
      hideModal();
      menuContainer.classList.remove('is-authenticated');
      avatar.classList.remove('is-authenticated');
      headerSignUpBtn.innerHTML = `<p class="sign-up-p">Sign up</p>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3.33325 10H16.6666M16.6666 10L11.6666 5M16.6666 10L11.6666 15" stroke="#EAC645" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`;
      if (headerSignUpBtn.textContent === 'Sign up') {
        signInButton.addEventListener('click', showModal);
      }
      mobileLogOutBtn.classList.remove('is-authenticated');
    }
  });
});

signInBtn.addEventListener('click', onSignInBtnClick);
signUpBtn.addEventListener('click', onSignUpBtnClick);
