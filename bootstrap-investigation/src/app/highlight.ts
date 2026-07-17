import { Directive, input, signal } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  host: {
    '[style.background]' : "highlighted() ? colour() : ''",
    '(click)': "onClick()",
    '(mouseenter)': "highlighted.set(true)",
    '(mouseleave)': "highlighted.set(false)"
  }
})
export class Highlight {

  highlighted = signal<boolean>(false);
  //appHighlight = input<string>("lightcoral");

  colour = input.required<string>({
    alias: "appHighlight"
  });


  constructor() {
    console.log("appHighlight constructor called");
  }
  onClick() {
    alert("clicked");
  }
}
