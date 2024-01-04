import { signOut } from 'firebase/auth';
import { showLoadingIndicator } from '../loader';

import { app, auth, db } from './auth';

export function userSignOut() {
  const reloadDelay = 2500;
  signOut(auth)
    .then(() => {
      showLoadingIndicator();
      setTimeout(() => {
        location.reload();
      }, reloadDelay);
    })
    .catch(error => {
      console.log(error, 'Something went wrong');
    });
}
