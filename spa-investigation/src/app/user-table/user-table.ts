import { Component, input, output } from '@angular/core';
import { RouterLink } from "@angular/router";
import { User } from '../user';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-user-table',
  imports: [JsonPipe, RouterLink],
  template: `
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
            <td>
              <button (click)="onDelete(user.id)">Delete</button>
              <button (click)="onEdit(user)">Edit</button>
            </td>
          </tr>
        }
      </tbody>
    </table>
  `,
  styleUrl: './user-table.css',
})
export class UserTable {

  users = input<User[]>();
  delete = output<number>();
  edit = output<User>();

  onEdit(user:User) {
    this.edit.emit(user);
  }

  onDelete(id: number) {
    if (confirm(`delete ${id}`)) {
      this.delete.emit(id);
    }
  }


}
