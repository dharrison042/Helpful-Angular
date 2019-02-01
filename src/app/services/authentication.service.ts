import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

import {apiUrl} from '../../environments/environment';

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${apiUrl}/users/authenticate`, {username: username, password: password})
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
      }));
  }

  // Does a simple check to see if the currentUser exists in LocalStorage, which qualifies as logged in
  isLoggedIn() {
    if (localStorage.getItem('currentUser')) {
      // console.log('user logged in');
      return true;
    } else {
      // console.log('user not logged in');
      return false;
    }
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
