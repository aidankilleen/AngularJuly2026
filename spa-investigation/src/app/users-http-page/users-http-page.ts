import { Component, inject, OnInit, signal } from '@angular/core';
import { UsersHttpService } from '../users-http-service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { User } from '../user';

@Component({
  selector: 'app-users-http-page',
  imports: [JsonPipe, AsyncPipe],
  template: `
    <h2>Users Http Page</h2>
    {{ users() | json }}
  `,
  styleUrl: './users-http-page.css',
})
export class UsersHttpPage implements OnInit {

  public userService: UsersHttpService = inject(UsersHttpService);
  users = signal<User[]>([]);

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
