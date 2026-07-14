import { Component, input, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';

import { User } from '../models/user';

@Component({
  selector: 'pt-user-editor',
  imports: [JsonPipe],
  template: `
    @if(editing()) {
      <div>
        <input [value]="editingUser().id" readonly/><br>
        <input [value]="editingUser().name" (input)="updateName($event)"/><br>
        <input [value]="editingUser().email"/><br>
        <input type="checkbox" [checked]="editingUser().active"/><br>
        <button>Save</button><button (click)="editing.set(false)">Cancel</button>

        <hr>
        {{ editingUser() | json }}
      </div>
    } @else {
      <div>
        {{ user()?.id }}<br>
        {{ user()?.name }}<br>
        {{ user()?.email }}<br>
        {{ user()?.active ? "Active" : "Inactive" }}<br>
        <button (click)="onStartEditing()">Edit</button>{{ editing() }}
      </div>
    }

  `,
  styleUrl: './user-editor.css',
})
export class UserEditor {
  editing = signal<boolean>(false);
  user = input.required<User>();
  editingUser = signal<User>(new User(0, "", "", false));

  onStartEditing() {
    // copy the user to the editingUser
    this.editingUser.set(this.user());
    this.editing.set(true);
  }
  updateName(event:Event) {
    let name = (event.target as HTMLInputElement).value;

    this.editingUser().name = name;
    /*
    let updatedUser = new User(
                  this.editingUser().id,
                  name,
                  this.editingUser().email,
                  this.editingUser().active);

    //this.editingUser().name = name;
    this.editingUser.set(updatedUser);
    */
  }

}
