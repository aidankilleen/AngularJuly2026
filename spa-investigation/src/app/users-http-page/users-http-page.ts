import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from "@angular/router";

import { UsersHttpService } from '../users-http-service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { User } from '../user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users-http-page',
  imports: [JsonPipe, RouterLink, FormsModule],
  template: `
    <h2>Users Http Page</h2>

    <button (click)="onAddUserClicked()">Add User</button>
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
              <button (click)="onEditUserClicked(user)">Edit</button>
            </td>
          </tr>
        }
      </tbody>
    </table>

    @if (showDialog()){

      <div class="dialog">
        <h3>{{adding() ? "Add User" : "Edit User"}}</h3>
        Name:<input [(ngModel)]="editingUser().name"><br>
        Email:<input [(ngModel)]="editingUser().email"><br>
        Active:<input type="checkbox" [(ngModel)]="editingUser().active"/><br>
        @if (adding()){
          <button (click)="onAddUser()">Save</button>
        } @else {
          <button (click)="onEditUser()">Update</button>
        }
        <button (click)="showDialog.set(false)">Cancel</button>

        <hr>
        {{ editingUser() | json }}
      </div>
    }
  `,
  styleUrl: './users-http-page.css',
})
export class UsersHttpPage implements OnInit {

  public userService: UsersHttpService = inject(UsersHttpService);
  users = signal<User[]>([]);
  editingUser = signal<User>({id: -1,
      name:"",
      email:"",
      active:false
    });

  showDialog = signal<boolean>(false);
  adding = signal<boolean>(true);



  ngOnInit():void {
    // do initialisation here
    this.userService.getUsers()
      .subscribe(data=>this.users.set(data));
  }

  onEditUserClicked(user:User) {
    this.adding.set(false);
    this.editingUser.set({...user});
    this.showDialog.set(true);
  }

  onEditUser() {
    this.showDialog.set(false);
    this.userService.updateUser(this.editingUser())
      .subscribe(
        updatedUser => this.users.update(
          current => current.map(
            user => user.id != updatedUser.id ? user : updatedUser
          )
        )
      );
  }

  onAddUserClicked() {
    this.adding.set(true);
    this.editingUser.set({id:-1,name:'', email:'', active:false});
    this.showDialog.set(true)
  }

  onAddUser() {
    this.showDialog.set(false);
    this.userService.addUser(this.editingUser())
      .subscribe (
        createdUser => this.users.update(
          current => current.concat([createdUser])
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
}
