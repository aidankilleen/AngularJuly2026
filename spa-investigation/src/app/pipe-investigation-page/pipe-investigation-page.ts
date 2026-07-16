import { CurrencyPipe, DatePipe, JsonPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { SummaryPipe } from "../summary-pipe";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pipe-investigation-page',
  imports: [TitleCasePipe, UpperCasePipe, JsonPipe, DatePipe, CurrencyPipe, SummaryPipe, FormsModule],
  template: `
    <h2>Pipe Investigation</h2>

    <h1>summary</h1>

    {{ text() | summary }}
    <hr>

    {{ text() | summary:25 }}

    <hr>
    {{ text() | summary:length() }}<br>

    <input
      type="range"
      [(ngModel)]="length"
      [max]="text().length"
    />




    <h1>titlecase</h1>
    {{ text() | titlecase }}

    <hr>

    <h1>uppercase</h1>
    {{ text() | uppercase }}

    <h1>json</h1>
    {{ user() | json }}

    <h1>date</h1>
    {{ today | date:'dd MMM yyyy' }}

    <h1>price</h1>
    {{ price | currency:'EUR' }}
  `,
  styleUrl: './pipe-investigation-page.css',
})
export class PipeInvestigationPage {

  length = signal<number>(25);

  text = signal<string>("Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis cum nulla nemo quaerat laudantium quisquam eum enim consequatur quasi velit inventore, repudiandae aut saepe, dolore repellat impedit ipsa corrupti! Neque?");

  user= signal({
    id:1, name:"Alice", email: "alice@gmail.com", active:false
  });

  today = new Date();

  price = 10.99;


}
