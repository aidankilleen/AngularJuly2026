import { Component } from '@angular/core';
import { Highlight } from '../highlight';
@Component({
  selector: 'app-directive-investigation-page',
  imports: [Highlight],
  template: `
    <h2>Directive Investigation</h2>

    <div appHighlight="lightgreen">
      This is a div
    </div>

    <h3 appHighlight="lightblue">Is this highlighted?</h3>

    <p appHighlight="yellow">lorem</p>


  `,
  styleUrl: './directive-investigation-page.css',
})
export class DirectiveInvestigationPage {}
