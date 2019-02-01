import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    // Considers a user to be logged in if they can be retrieved from the localstorage
    if (localStorage.getItem('currentUser')) {
      console.log('Was Able to access currentUser');

      // When this guard gets activated, it will to the check to see if the expiration date for the session is still active
      let userDate = new Date(JSON.parse(localStorage.getItem('currentUser')).exp);
      if (userDate <= new Date()) {
        console.log('login expired');
        this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
        return false;
      }

      // Returns true if the user is located in localStorage and their session time hasn't expired
      return true;
    }

    console.log('was unable to access current user. redirecting...');
    // not logged in so redirect to login page with the current page as the returnURL for after login
    this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
    return false;
  }
}
