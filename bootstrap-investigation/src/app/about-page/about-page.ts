import { Component } from '@angular/core';
import { NgbAccordionBody, NgbAccordionButton, NgbAccordionCollapse, NgbAccordionDirective, NgbAccordionHeader, NgbAccordionItem } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-about-page',
  imports: [NgbAccordionDirective,
            NgbAccordionItem,
            NgbAccordionButton,
            NgbAccordionHeader,
            NgbAccordionCollapse,
            NgbAccordionBody],
  template: `
    <h2>Accordion</h2>

    <div ngbAccordion [closeOthers]="true">

      <div ngbAccordionItem [collapsed]="false">
        <h2 ngbAccordionHeader>
				  <button ngbAccordionButton>One</button>
			  </h2>
        <div ngbAccordionCollapse>
				  <div ngbAccordionBody>
            <ng-template>
              item 1
            </ng-template>
          </div>
        </div>
      </div>
      <div ngbAccordionItem>
        <h2 ngbAccordionHeader>
          <button ngbAccordionButton>Two</button>
			  </h2>
        <div ngbAccordionCollapse>
          <div ngbAccordionBody>
            <ng-template>
              item 2
            </ng-template>
          </div>
        </div>
      </div>
      <div ngbAccordionItem>
        <h2 ngbAccordionHeader>
          <button ngbAccordionButton>Three</button>
			  </h2>
        <div ngbAccordionCollapse>
          <div ngbAccordionBody>
            <ng-template>
              item 3
            </ng-template>
          </div>
        </div>
      </div>
    </div>


  `,
  styleUrl: './about-page.css',
})
export class AboutPage {

  items = ["First", "Second", "Third"];
}
