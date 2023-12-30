import { userSignUp , userSignIn, userSignOut} from "./auth";

const authorizationModal = document.querySelector('.form-wrapper');
const submitBtn = document.querySelector('.submit-btn');
const signUpForm = document.querySelector('.sign-up-form');
const closeModalButton = document.querySelector('.au-modal-close');
const userName = document.querySelector('#name');
const userEmail = document.querySelector('input[type="email"]');
const userPassword = document.querySelector('input[type="password"]');
console.log(submitBtn.textContent)

signUpForm.addEventListener('submit', e => {
    e.preventDefault();
    
    if (submitBtn.textContent = 'Sign up') {
       
        const { value: username } = userName;
      const { value: email } = userEmail
      const { value: password } = userPassword;
      
  
      if (email !== '' && password !== '' && username !== '') {
        userSignUp(username,email,password);
      }
    } else {
      const { value: email } = userEmail
      const { value: password } = userPassword
  
      if (email !== '' && password !== '') {
        userSignIn(email, password);
      }
    }
  });
  