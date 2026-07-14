import { Component, input, signal } from '@angular/core';
import { AccordionItem } from '../accordion-item';
import { JsonPipe } from '@angular/common';
import { AccordionPanel } from "../accordion-panel/accordion-panel";
@Component({
  selector: 'app-accordion',
  imports: [JsonPipe, AccordionPanel],
  template: `
  <div>
    @for(item of items(); track item;let i = $index) {

      <app-accordion-panel
        [item]="item"
        [expanded]="i == expandedIndex()"
        (toggle)="onToggle(i)"/>
    }
  </div>

  `,
  styleUrl: './accordion.css',
})
export class Accordion {

  items=input.required<AccordionItem[]>();
  expandedIndex = signal(0);

  onToggle(index:number) {
    //alert(`panel ${index} tried to expand`);
    //this.expandedIndex.set(index);

    // if the pandel is already expanded then set expandedIndex = -1
    // i.e. close all panels
    this.expandedIndex.update(
      current=>index != current ? index : -1);
  }
}
