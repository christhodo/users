import { Component, OnInit } from '@angular/core';
import { UserService } from '@user-angular/core-data';
import { User } from '@user-angular/api-interfaces';

@Component({
  selector: 'user-angular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.onGetUsers();
    //this.onGetUser();
  }

  onGetUsers(): void {
    this.userService.getUsers().subscribe(
      (response) => (this.users = response),
      (error: any) => console.log(error),
      () => console.log('Done getting users')
    );
  }

  onGetUser(): void {
    this.userService.getUser().subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done getting user')
    );
  }
}
