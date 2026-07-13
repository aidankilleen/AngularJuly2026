import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PtMessage } from "./pt-message/pt-message";
import { Message } from './models/message';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PtMessage],
  template: `
    <message
      [message]="{title:'zzz', text:'qqq'}">
    </message>

    <select>
    @for(name of names; track name) {
      <option>{{ name }}</option>
    }
    </select>

    <!--
      messages is a variable from the class - an array
      message is a variable that is used to iterate through the list
      <message is a component with a selector of "message"
      [message] is a property of this component
      "message" is passing the iterator variable to the component
      </message is ending the tag
    -->
    @for(message of messages; track message) {

      <message [message]="message"></message>

    }

    <!--
    <message message="not a message"></message>
    -->

    `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular!');

  names = ["Alice", "Bob", "Carol", "Dan"];

  message = {
    title: "Custom Message",
    text: "This is a custom message"
  }

  messages:Message[] = [
    new Message("message 1","this is message 1"),
    new Message("message 2","this is message 2"),
    new Message("message 3","this is message 3"),
    new Message("message 4","this is message 4"),
    {title:"message 5", text:"this is message 5"}
  ];

}
