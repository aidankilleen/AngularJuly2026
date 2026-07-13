import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-slider',
  imports: [],
  template: `
  <div>
    <input
      type="range"
      [value]="value()"
      (input)="onInput($event)"
      min="-180"
      max="180"
    /><button (click)="value.set(0)">reset</button>
    <div class="box" [style.transform]="'rotate(' + value() + 'deg)'">
      {{ value() }}
    </div>
  </div>
  `,
  styleUrl: './slider.css',
})
export class Slider {

  value=signal(0);

  onInput(event:Event) {
    let slider = event.target as HTMLInputElement;
    this.value.set(slider.valueAsNumber);
  }
}
