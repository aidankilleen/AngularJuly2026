import { Component, input, output, signal } from '@angular/core';
import { AccordionItem } from '../accordion-item';

@Component({
  selector: 'app-accordion-panel',
  imports: [],
  template: `
    <div
    (click)="onClick()">
        <h2
          [style.backgroundColor]="expanded() ? 'lightblue' : 'lightgreen'"
        >
        {{item().title}}
        </h2>
        @if (expanded()) {
          <p>{{item().text}}</p>
        }
      </div>
  `,
  styleUrl: './accordion-panel.css',
})
export class AccordionPanel {

  item = input.required<AccordionItem>();
  //expanded = signal<boolean>(false);
  expanded = input<boolean>();
  toggle = output<void>();

  onClick() {
    // you can't modify a input directly
    //this.expanded.update(current=>!current)
    this.toggle.emit();
  }
}
