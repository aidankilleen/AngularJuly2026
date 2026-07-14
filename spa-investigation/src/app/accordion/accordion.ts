import { Component, input } from '@angular/core';
import { AccordionItem } from '../accordion-item';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-accordion',
  imports: [JsonPipe],
  template: `
  <div>
    @for(item of items(); track item) {
      <div>
        <h2>{{item.title}}</h2>
        <p>{{item.text}}</p>
      </div>
    }
  </div>
{{ items() | json }}

  `,
  styleUrl: './accordion.css',
})
export class Accordion {

  items=input.required<AccordionItem[]>();
}
