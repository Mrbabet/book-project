import { userSignUp , userSignIn, userSignOut} from "./auth";

const authorizationModal = document.querySelector('.form-wrapper');
const submitBtn = document.querySelector('.submit-btn');
const signUpForm = document.querySelector('.sign-up-form');
const closeModalButton = document.querySelector('.au-modal-close');
const userName = document.querySelector('#name');
const userEmail = document.querySelector('input[type="email"]');
const userPassword = document.querySelector('input[type="password"]');
const signInBtn = document.querySelector('.sign-in-btn')
const signUpBtn = document.querySelector('.sign-up-btn')
const userNameContainer = document.querySelector('.form-item-render')
const inputName = document.getElementById('name')
const signOutBtn = document.querySelector('.sign-out-btn')
export const SignOutBtnContainer = document.querySelector('.sign-out-container') 


const onSignUpBtnClick = function(){    
    submitBtn.textContent = 'Sign up'
    userNameContainer.style.display = 'block'
}
const onSignInBtnClick = function(){
    submitBtn.textContent = 'Sign in'
    userNameContainer.style.display = 'none'
    inputName.removeAttribute('required')
}


signUpForm.addEventListener('submit', e => {
    e.preventDefault();
    
    if (submitBtn.textContent = 'Sign up') {
       
        const { value: username } = userName;
        const { value: email } = userEmail
        const { value: password } = userPassword;
      
  
      if (email !== '' && password !== '' && username !== '') {
        userSignUp(username,email,password);
      }
    } 
    if (submitBtn.textContent = 'Sign in') {
        const { value: email } = userEmail
        const { value: password } = userPassword
  
      if (email !== '' && password !== '') {
        userSignIn(email, password);
      }
        
    }
    signUpForm.reset()
    onSignUpBtnClick()
  });
  signOutBtn.addEventListener('click', userSignOut)
  signInBtn.addEventListener('click', onSignInBtnClick)
  signUpBtn.addEventListener('click', onSignUpBtnClick)
  
  
  
  