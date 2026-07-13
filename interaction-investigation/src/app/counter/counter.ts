import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  template: `
    <div>
      {{ count() }}
      <button (click)="onIncrement()">+</button>
      <button (click)="onDecrement()">-</button>

      <button (click)="count.set(count() + 1)">+</button>
      <button (click)="count.set(count() - 1)">-</button>

      <button (click)="changeCount(1)">+</button>
      <button (click)="changeCount(-1)">-</button>
    </div>

  `,
  styleUrl: './counter.css',
})
export class Counter {
  // signals are preferrable to a regular varaible
  // angular can avoid rerendering ui with signals
  // better than it can with regular variables

  count = signal(0);

  changeCount(n:number) {
    this.count.set(this.count() + n);
  }
  onIncrement() {
    //this.count = this.count + 1;  // NB: notice that ui refreshes automatically
    this.count.set(this.count() + 1);
  }
  onDecrement() {
    //this.count--;
    this.count.set(this.count() - 1);
  }

}
