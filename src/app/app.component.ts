import { Component } from '@angular/core';
import {AuthenticationService} from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService]
})
export class AppComponent {

  constructor( private authService: AuthenticationService) { }


}
