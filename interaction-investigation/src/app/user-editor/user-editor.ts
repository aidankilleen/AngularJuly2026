import { Component, input, output, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';

import { User } from '../models/user';

@Component({
  selector: 'pt-user-editor',
  imports: [JsonPipe],
  template: `
    <div
      class="outer"
      [style.background-color]="user().active ? 'lightgreen' :''">
    @if(editing()) {
      <div>
        <input
          [value]="editingUser().id" readonly
        /><br>
        <input
          [value]="editingUser().name"
          (input)="updateName($event)"
        /><br>
        <input
          [value]="editingUser().email"
          (input)="updateEmail($event)"
        /><br>
        <input
          type="checkbox"
          [checked]="editingUser().active"
          (input)="updateActive($event)"
        /><br>
        <button (click)="onSave()">Save</button>
        <button (click)="editing.set(false)">Cancel</button>

      </div>
    } @else {
      <div>
        {{ user().id }}<br>
        {{ user().name }}<br>
        {{ user().email }}<br>
        {{ user().active ? "Active" : "Inactive" }}<br>
        <button (click)="onStartEditing()">Edit</button>
      </div>
    }
  </div>

  `,
  styleUrl: './user-editor.css',
})
export class UserEditor {
  editing = signal<boolean>(false);
  user = input.required<User>();
  editingUser = signal<User>(new User(0, "", "", false));
  userChanged = output<User>();

  onSave() {
    this.userChanged.emit(this.editingUser());
    this.editing.set(false);
  }
  onStartEditing() {
    // copy the user to the editingUser
    this.editingUser.set({...this.user()});
    this.editing.set(true);
  }
  updateEmail(event:Event) {
    let email = (event.target as HTMLInputElement).value;
    this.editingUser.set({...this.editingUser(), email});
  }
  updateActive(event:Event) {
    let active = (event.target as HTMLInputElement).checked;
    this.editingUser.set({...this.editingUser(), active});
  }
  updateName(event:Event) {
    let name = (event.target as HTMLInputElement).value;
    // don't do this!
    // it seems to work BUT it may not update
    // the ui correctly in all cases
    // this.editingUser().name = name;

    this.editingUser.set({...this.editingUser(), name});

    // js / ts shortcut
    // if your object is being created with variables
    // that have the same names as the properties
    // you don't need to duplicate the property name
    /*
    let id = 1;
    let email= "abc@gmail.com";
    let active = true;
    let u = {
      id,
      name,
      email,
      active
    }
    */
  }

}
