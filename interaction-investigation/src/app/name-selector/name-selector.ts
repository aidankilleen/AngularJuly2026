import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-name-selector',
  imports: [],
  template: `
    <div>
      <select (input)="onSelected($event)">

        @for (name of names(); track name) {
          <option>{{name}}</option>
        }
      </select>
      selected:{{selectedName()}}
    </div>
  `,
  styleUrl: './name-selector.css',
})
export class NameSelector {

  names = input<string[]>();
  selectedName = signal("");

  onSelected(event:Event) {
    let select = event.target as HTMLInputElement;
    this.selectedName.set(select.value);
  }
}
