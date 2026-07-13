import { Component, signal } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { Counter } from "./counter/counter";
import { NameEditor } from "./name-editor/name-editor";
import { Slider } from "./slider/slider";
import { NameSelector } from "./name-selector/name-selector";

@Component({
  selector: 'app-root',
  imports: [TitleCasePipe, Counter, NameEditor, Slider, NameSelector],
  template: `
    <div>
      <h1>{{ title() | titlecase }}</h1>
      <!--<button onclick="alert('clicked')">Press Me</button>-->
      <button (click)="onClick()">Press Me</button>
      <hr>
      <app-counter/>
      <hr>
      <app-name-editor/>
      <hr>
      <app-slider/>
      <hr>
      <app-name-selector [names]="names"/>
    </div>
  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('interaction investigation');
  count:number = 0;

  names = ['Alice', 'Bob', "Carol", "Dan"];

  onClick() {
    alert("proper angular event handler");
  }
}
