import { Component, input, OnInit, output, signal } from '@angular/core';
import { User } from '../user';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-dialog',
  imports: [JsonPipe, FormsModule],
  template: `
    @if (show()) {
      <div class="dialog">
        <h2>{{ add() ? "Add" : "Edit" }} User Dialog</h2>
        Name:<input [(ngModel)]="editingUser().name"><br>
        Email:<input [(ngModel)]="editingUser().email"><br>
        Active:<input type="checkbox" [(ngModel)]="editingUser().active"/><br>

        @if (add()){
          <button (click)="onAddUser()">Save</button>
        } @else {
          <button (click)="onEditUser()">Update</button>
        }
        <button (click)="cancel.emit()">Cancel</button>

        <hr>
        {{ editingUser() | json }}
      </div>
    }
  `,
  styleUrl: './user-dialog.css',
})
export class UserDialog implements OnInit {

  show = input.required<boolean>();
  user = input.required<User>();
  add = input.required<boolean>();
  editingUser = signal<User>({id:-1,name:"", email:"", active:false});
  cancel = output<void>();
  save = output<User>();

  onAddUser() {
    this.save.emit(this.editingUser());
  }
  onEditUser() {

  }
  ngOnInit(): void {
    this.editingUser.set({...this.user()})
  }

}
