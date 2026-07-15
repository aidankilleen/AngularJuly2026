import { Component, inject } from '@angular/core';
import { UserService } from '../user-service';
import { JsonPipe } from '@angular/common';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-users-page',
  imports: [JsonPipe, RouterLink],
  template: `
    <h2>Users</h2>

    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Active</th>
        </tr>
      </thead>
      <tbody>
        @for (user of userService.getUsers(); track user.id) {
          <tr>
            <td><a [routerLink]="'' + user.id">{{user.id}}</a></td>
            <td>{{user.name}}</td>
            <td>{{user.email}}</td>
            <td>{{user.active ? "Active" : "Inactive"}}</td>
          </tr>
        }
      </tbody>
    </table>
  `,
  styleUrl: './users-page.css',
})
export class UsersPage {

  // modern Angular uses the inject() function
  public userService:UserService = inject(UserService);


  /*
  // old style Angular used parameter injection
  //userService:UserService;

  constructor(public userService:UserService) {
    // this.userService = new UserService();

    // in enterprise software (for many reasons) it is better
    // that the framework instantiate the objects for us
    //this.userService = userService;

  }
  */

}
