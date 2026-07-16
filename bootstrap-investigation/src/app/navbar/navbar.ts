import { Component, signal } from '@angular/core';
import { routes } from '../app.routes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  template: `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" routerLink="">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            @for (item of navigationList(); track item) {
              <li class="nav-item">
                <a class="nav-link" aria-current="page"
                  [routerLink]="item.path">{{ item.title }}</a>
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
}
