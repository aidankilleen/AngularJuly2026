import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { JsonPipe, TitleCasePipe } from '@angular/common';

import { Navigation } from "./navigation/navigation";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TitleCasePipe, JsonPipe, RouterLinkWithHref, Navigation],
  template: `
    <h1>{{ title() | titlecase }}</h1>
<!--
    <a routerLink="/">Home</a> |
    <a routerLink="/about">About</a> |
    <a routerLink="/contact">Contact</a> |
    <a routerLink="/users">Users</a> |

    <hr>
-->

      <app-navigation/>
      <router-outlet/>
  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('spa investigation');


}
