import { Component, signal } from '@angular/core';
import { TitleCasePipe, JsonPipe } from '@angular/common';
import { User } from './models/user';
import { UserEditor } from "./user-editor/user-editor";

@Component({
  selector: 'app-root',
  imports: [TitleCasePipe, JsonPipe, UserEditor],
  template: `
    <div>
      <h1>{{ title() | titlecase }}</h1>

      @for(user of users; track user.id) {
        <pt-user-editor [user]="user"></pt-user-editor>

      }

      <hr>
      {{ users | json }}

    </div>
  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('interaction investigation');
  count:number = 0;

  users:User[] = [
    new User(1, "Alice", "alice@gmail.com", true),
    new User(2, "Bob", "bob@gmail.com", true),
    new User(3, "Carol", "carol@gmail.com", false),
    new User(4, "Dan", "dan@gmail.com", true)
  ];


  names = ['Alice', 'Bob', "Carol", "Dan"];
  name = signal<string>("");

  onNameSelected(name:string) {
    this.name.set(name);
  }
  onClick() {
    alert("proper angular event handler");
  }
}
