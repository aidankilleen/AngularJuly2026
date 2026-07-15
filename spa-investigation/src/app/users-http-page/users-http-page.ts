import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from "@angular/router";

import { UsersHttpService } from '../users-http-service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { User } from '../user';

@Component({
  selector: 'app-users-http-page',
  imports: [JsonPipe, AsyncPipe, RouterLink],
  template: `
    <h2>Users Http Page</h2>

    <button (click)="onAddUser()">Add User</button>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Active</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        @for (user of users(); track user.id) {
          <tr>
            <td><a [routerLink]="'' + user.id">{{user.id}}</a></td>
            <td>{{user.name}}</td>
            <td>{{user.email}}</td>
            <td>{{user.active ? "Active" : "Inactive"}}</td>
            <td><button (click)="onDelete(user.id)">Delete</button></td>
          </tr>
        }
      </tbody>
    </table>
  `,
  styleUrl: './users-http-page.css',
})
export class UsersHttpPage implements OnInit {

  public userService: UsersHttpService = inject(UsersHttpService);
  users = signal<User[]>([]);

  onAddUser() {
    // TODO - get this info from the ui
    let newUser = {
      id: -1,
      name:"NEW USER",
      email:"new.user@gmail.com",
      active:false
    };

    this.userService.addUser(newUser)
      .subscribe(
        createdUser => this.users.update(
          current=>current.concat([createdUser])
        )
      );

  }
  onDelete(id:number) {
    if (confirm(`delete ${id}`)) {
      this.userService.deleteUser(id)
        .subscribe(()=>{
          // remove this user from the users signal
          this.users.update(
            current => current.filter(
              user=>user.id != id
            )
          );
        });
    }
  }
  constructor() {
    // don't use the constructor when initialising things using a service
    // the sevice hasn't been injected properly yet
  }

  ngOnInit():void {
    // do initialisation here
    this.userService.getUsers()
      .subscribe(data=>this.users.set(data));
  }


/*
  users:User[] = [];

  constructor() {
    this.userService.getUsers()
      .subscribe(data=>this.users = data);
  }
      */
}
