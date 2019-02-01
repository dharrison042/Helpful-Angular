import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {

  usersList;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getAll().subscribe(resp => {
      console.log('resp', resp);
      this.usersList = resp;
    });

    console.log('users', this.usersList);
  }



}
