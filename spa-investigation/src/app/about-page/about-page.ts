import { Component } from '@angular/core';
import { AccordionItem } from '../accordion-item';
import { Accordion } from "../accordion/accordion";

@Component({
  selector: 'app-about-page',
  imports: [Accordion],
  template: `
    <h2>About Us Accordion</h2>

    <app-accordion
     [items]="accordionItems"/>
     <hr>
    <app-accordion
     [items]="newsItems"/>
  `,
  styleUrl: './about-page.css',
})
export class AboutPage {

  accordionItems:AccordionItem[] = [
    {title: "Item 1", text:"This is Item 1"},
    {title: "Item 2", text:"This is Item 2"},
    {title: "Item 3", text:"This is Item 3"},
    {title: "Item 4", text:"This is Item 4"},
  ]

  newsItems:AccordionItem[] = [
    {title:"News 1", text:"News Item 1"},
    {title:"News 2", text:"News Item 2"},
    {title:"News 3", text:"News Item 3"},
  ]


}
