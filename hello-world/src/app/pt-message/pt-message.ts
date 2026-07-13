import { Component, Input, input } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { Message } from '../models/message';

@Component({
  selector: 'message',
  imports: [TitleCasePipe],
  template: `
        <div>
          <h2>{{ message()?.title | titlecase }}</h2>
          <p>{{ message()?.text | titlecase }}</p>

          <!--<hr>
          {{ oldTitle }}-->
        </div>
  `,
  styleUrl: './pt-message.css',
})
export class PtMessage {

  @Input()    // old syntax used a decorator to identify inputs
  oldTitle="Old Title"; // don's use this syntax - but you might encounter it


  //title = input();  // newer syntax using an input() signal
  //text = input();
  message = input<Message>();

}
