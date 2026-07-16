import { Component, inject } from '@angular/core';
import { UsersHttpService } from '../users-http-service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { UserTable } from '../user-table/user-table';

@Component({
  selector: 'app-async-pipe-page',
  imports: [AsyncPipe, JsonPipe, UserTable],
  template: `
    <h2>Async Pipe</h2>

    @if (users$ | async; as users  ) {
      <app-user-table [users]="users"/>
    }

  `,
  styleUrl: './async-pipe-page.css',
})
export class AsyncPipePage {

  userService = inject(UsersHttpService);

  users$ = this.userService.getUsers();


}
