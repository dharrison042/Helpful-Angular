import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [],
  providers: [AuthenticationService]
})
export class HeaderComponent {

  searchString = '';

  constructor(private router: Router, public authService: AuthenticationService) {

  }

  logout() {
    console.log('logging out');
    this.authService.logout();
    this.router.navigate(['/login']);
  }


  // This gets called everytime input gets changed in the search bar
  onChange(e) {
    // console.log(this.searchString);
  }


  // This is to allow search to be submitted with enter
  keyDownFunction(event) {
    if (event.keyCode === 13) {
      this.router.navigate(['/search/' + this.searchString]);
    }
  }

}
