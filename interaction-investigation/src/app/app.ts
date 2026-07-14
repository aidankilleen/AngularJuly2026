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

      @for(user of users(); track user.id) {
        <pt-user-editor
          [user]="user"
          (userChanged)="onUserChanged($event)"/>
      }

    </div>
  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('interaction investigation');
  count:number = 0;

  /*
  users:User[] = [
    new User(1, "Alice", "alice@gmail.com", true),
    new User(2, "Bob", "bob@gmail.com", true),
    new User(3, "Carol", "carol@gmail.com", false),
    new User(4, "Dan", "dan@gmail.com", true)
  ];
  */
 users = signal<User[]>([
    new User(1, "Alice", "alice@gmail.com", true),
    new User(2, "Bob", "bob@gmail.com", true),
    new User(3, "Carol", "carol@gmail.com", false),
    new User(4, "Dan", "dan@gmail.com", true)
  ]);

  onUserChanged(changedUser:User) {
    // update the list of users
    // replace the user object at index with the changedUser
    //let index = this.users().findIndex(user => user.id == changedUser.id);
    //this.users[index] = changedUser;

    // use update to modify the existing value
    // set would replace the existing value
    this.users.update(
      current => current.map(
        user => user.id == changedUser.id ? changedUser : user
      )
    );

  }

  constructor() {
    console.log("is this working?");

    console.log(this.names);
    console.log(this.users);


    // destructuring
    // ... - is the "spread" operator which takes the remaining elements
    let [firstName, secondName, ...others] = this.names;

    console.log(firstName);
    console.log(secondName);
    console.log(others);

    // same thing works with objects
    let u = new User(1, "Alice", "alice@gmail.com", true);

    console.log(u);

    let {id, email, ...otherProperties} = u;

    // destructure the id and email properties from the object u
    console.log(id);
    console.log(email);
    console.log(otherProperties);

    // difference between assignment and copying
    // this is not a copy!!!
    // just two variables looking at the same object
    // change 1 and the other is also changed.
    let copy = u;

    copy.id = 9999;

    console.log(u);
    console.log(copy);

    // very long-winded
    copy = new User (u.id, u.name, u.email, u.active);

    copy.id = 1111;

    console.log(u);
    console.log(copy);

    // we can copy using the spread operator
    copy = {...u};

    copy.id = 2222;

    console.log(u);
    console.log(copy);

    // we can copy and change something
    copy = {...u, name:"CHANGED"};

    console.log(copy);

















  }


  names = ['Alice', 'Bob', "Carol", "Dan"];
  name = signal<string>("");

  onNameSelected(name:string) {
    this.name.set(name);
  }
  onClick() {
    alert("proper angular event handler");
  }
}
