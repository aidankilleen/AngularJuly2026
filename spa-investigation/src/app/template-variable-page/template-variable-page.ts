import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-variable-page',
  imports: [FormsModule],
  template: `
    <h2>Template Variables</h2>

    <input/><br>
    <input [(ngModel)] = "name" #txtName/><br>
    <input [value]="email()" (input)="email.set(txtEmail.value)" #txtEmail/><br>

    <button (click)="txtName.focus()">Focus on name</button>

    <button (click)="onFocus(txtName)">Focus on name</button>
    <hr>
    {{ name() }}<br>
    {{ email() }}<br>

  `,
  styleUrl: './template-variable-page.css',
})
export class TemplateVariablePage {

  name = signal<string>("Name goes here");

  email = signal<string>("a@b.c");

  onFocus(txt:HTMLInputElement) {
    // document.getElementById(""); // do not do that !!!!!!
    txt.focus();
  }
}
