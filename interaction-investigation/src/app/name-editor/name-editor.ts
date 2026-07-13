import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-name-editor',
  imports: [],
  template: `
    <div>
      Name:<input
            [value]="name()"
            (input)="onChange($event)"
            >
      <button (click)="name.set('')">reset</button>
    </div>
    <hr>
    name() = {{name()}}

  `,
  styleUrl: './name-editor.css',
})
export class NameEditor {

  name = signal("Alice");

  onChange(event:Event) {
    //console.log((event.target?.);
    let input = event.target as HTMLInputElement;
    let newValue = input.value;
    this.name.set(newValue);
  }

}
