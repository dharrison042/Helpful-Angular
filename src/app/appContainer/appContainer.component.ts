import {Component} from '@angular/core';
import {AuthenticationService} from '../services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './appContainer.component.html',
  styleUrls: [],
  providers: [AuthenticationService]
})
export class AppContainerComponent {

  constructor(public authService: AuthenticationService, private router: Router) {

  }

  // logout() {
  //   console.log('logging out');
  //   this.authService.logout();
  //   this.router.navigate(['/login']);
  // }

}
