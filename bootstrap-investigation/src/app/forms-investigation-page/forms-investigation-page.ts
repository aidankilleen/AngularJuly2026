import { Component } from '@angular/core';
import { UserForm } from '../user-form/user-form';
import { User } from '../user';

@Component({
  selector: 'app-forms-investigation-page',
  imports: [UserForm],
  template: `
    <h2>Forms Investigation</h2>

    <app-user-form
      [user]="user"
      (saved)="onSaved($event)">

    </app-user-form>
  `,
  styleUrl: './forms-investigation-page.css',
})
export class FormsInvestigationPage {

  user = {id:1, name:"Alice", email:"alice@gmail.com", active:true};
  onSaved(user:User) {
    alert(JSON.stringify(user));
  }
}
