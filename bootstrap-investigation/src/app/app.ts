import { Component, inject, signal, TemplateRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbModal, NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { Navbar } from "./navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgbTooltip, Navbar],
  template: `
    <app-navbar/>
    <router-outlet/>
  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('bootstrap-investigation');
  private modalService = inject(NgbModal);

  /*
  open(content: TemplateRef<any>) {
    this.modalService.open(content)
      .result.then(
        result => {
          alert("closed")
        },
        reason => {
          alert("dismissed");
        });

  }
        */
}
