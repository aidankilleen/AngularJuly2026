import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersHttpService } from '../users-http-service';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-user-dialog-detail-page',
  imports: [AsyncPipe, JsonPipe],
  template: `
    <h2>User Detail {{ userId }}</h2>

    @if (user$ | async; as user) {
      {{ user.id }}
      {{ user.name }}
      {{ user.email }}
      {{ user.active }}
    }
    <hr>

    {{ user$ | async | json }}
  `,
  styleUrl: './user-dialog-detail-page.css',
})
export class UserDialogDetailPage {

   private route = inject(ActivatedRoute);
   userId = Number(this.route.snapshot.paramMap.get("id"));

   userService = inject(UsersHttpService);

   user$ = this.userService.getUser(this.userId);
}
