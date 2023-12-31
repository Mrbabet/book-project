import { onAuthStateChanged } from "firebase/auth";
import { userSignUp , userSignIn, userSignOut, auth} from "./auth";
import '../sign-form'



const authorizationModal = document.querySelector('.form-wrapper');
const submitBtn = document.querySelector('.submit-btn');
const signUpForm = document.querySelector('.sign-up-form');
const closeModalButton = document.querySelector('.au-modal-close');
const userName = document.querySelector('#name');
const userEmail = document.querySelector('input[type="email"]');
const userPassword = document.querySelector('input[type="password"]');
const signInBtn = document.querySelector('.sign-in-btn')
const signUpBtn = document.querySelector('.sign-up-btn')
const headerSignUpBtn = document.querySelector('.sign-up')
const userNameContainer = document.querySelector('.form-item-render')
const inputName = document.getElementById('name')
const signOutBtn = document.querySelector('.sign-out-btn')
export const SignOutBtnContainer = document.querySelector('.sign-out-container')
const menuContainer = document.querySelector('.menu')
const loggedInBtn = document.querySelector('.logged-in')


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




window.addEventListener('load', ()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user)
     menuContainer.style.display = 'flex'
     loggedInBtn.style.display = 'block'
     loggedInBtn.textContent = user.displayName
     headerSignUpBtn.style.display ='none'

    } else {
      menuContainer.style.display='none'
      loggedInBtn.style.display = 'none'
      headerSignUpBtn.style.display = 'flex'
       
    }
});

})



  signOutBtn.addEventListener('click', userSignOut)
  signInBtn.addEventListener('click', onSignInBtnClick)
  signUpBtn.addEventListener('click', onSignUpBtnClick)
  loggedInBtn.addEventListener('click',userSignOut )
  
  
  
  