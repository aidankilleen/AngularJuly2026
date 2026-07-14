import { Component, signal } from '@angular/core';
import { routes } from '../app.routes';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <div>
    @for (navItem of navigationList(); track navItem.title)
      {
        <a
          [routerLink]="navItem.path"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{
            exact: navItem.path === ''
          }"
        >
        {{ navItem.title }}</a> |
      }
    </div>
  `,
  styleUrl: './navigation.css',
})
export class Navigation {
    navigationList = signal(routes.filter(router => router.title));
}
