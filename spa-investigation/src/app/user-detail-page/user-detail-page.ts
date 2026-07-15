import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user-service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-user-detail-page',
  imports: [JsonPipe],
  template: `
  <h2>User Detail {{ userId }}</h2>

  {{user?.name}}


  @if (user) {
    <table>
      <tr><td>Id</td><td>{{user.id}}</td></tr>
      <tr><td>Name</td><td>{{user.name}}</td></tr>
      <tr><td>Email</td><td>{{user.email}}</td></tr>
      <tr><td>Active</td><td>{{user.active ? "Active" : "Inactive"}}</td></tr>
    </table>
  }

  `,
  styleUrl: './user-detail-page.css',
})
export class UserDetailPage {

  private route = inject(ActivatedRoute);
  private userService:UserService = inject(UserService);
  userId = this.route.snapshot.paramMap.get("id");
  user = this.userService.getUser(parseInt(this.userId ? this.userId : "" ));

}
