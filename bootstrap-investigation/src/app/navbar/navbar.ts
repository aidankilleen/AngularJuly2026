import { Component, signal } from '@angular/core';
import { routes } from '../app.routes';
import { RouterLink } from '@angular/router';
import { NgbCollapse } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, NgbCollapse],
  template: `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" routerLink="">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          [aria-expanded]="!isCollapsed()"
          aria-label="Toggle navigation"
          (click)="isCollapsed.update(current=>!current)">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          [ngbCollapse]="isCollapsed()"
          class="navbar-collapse"
          id="navbarNav">
          <ul class="navbar-nav">
            @for (item of navigationList(); track item) {
              <li class="nav-item">
                <a
                  class="nav-link"
                  aria-current="page"
                  [routerLink]="item.path"
                  (click)="isCollapsed.set(true)"
                >
                  {{ item.title }}
                </a>
              </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  `,
  styleUrl: './navbar.css',
})
export class Navbar {

  navigationList = signal(routes.filter(router => router.title));
  isCollapsed = signal<boolean>(true);
}
