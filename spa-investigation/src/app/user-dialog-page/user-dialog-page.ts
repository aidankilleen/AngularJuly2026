import { Component, inject, OnInit, signal } from '@angular/core';
import { UsersHttpService } from '../users-http-service';
import { User } from '../user';
import { UserTable } from '../user-table/user-table';
import { UserDialog } from '../user-dialog/user-dialog';

@Component({
  selector: 'app-user-dialog-page',
  imports: [UserTable, UserDialog],
  template: `
  <h2>User Dialog</h2>

  <button (click)="onAdd()">Add User</button>
  <app-user-table
    [users]="users()"
    (delete)="onDelete($event)"
    (edit)="onEdit($event)"
  />

  <app-user-dialog
    [show]="showDialog()"
    [user]="editingUser()"
    [add]="adding()"
    (cancel)="showDialog.set(false)"
    (save)="onSave($event)"/>
  `,
  styleUrl: './user-dialog-page.css',
})
export class UserDialogPage implements OnInit {

  public userService:UsersHttpService = inject(UsersHttpService);
  users = signal<User[]>([]);
  showDialog = signal<boolean>(false);
  adding = signal<boolean>(false);
  editingUser = signal<User>({
    id:-1,
    name:"",
    email:"",
    active:false
  });

  onSave(user:User) {

    if (this.adding()) {
      // new user
      this.showDialog.set(false);
      this.userService.addUser(user)
        .subscribe (
          createdUser => this.users.update(
            current => current.concat([createdUser])
          )
        );

    } else {
      // editing user

    }
  }
  onAdd() {
    this.adding.set(true);
    this.showDialog.set(true);
  }
  onEdit(user:User) {
    this.editingUser.set({...user});
    this.adding.set(false);
    this.showDialog.set(true);
  }
  onDelete(id:number) {

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

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe(data=>this.users.set(data));
  }

}
