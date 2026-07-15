import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersHttpService } from '../users-http-service';
import { User } from '../user';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-user-detail-http-page',
  imports: [JsonPipe],
  template: `
    <h2>User Detail Http {{ userId }}</h2>
  @if (user()) {
    <table>
      <tr><td>Id</td><td>{{user()?.id}}</td></tr>
      <tr><td>Name</td><td>{{user()?.name}}</td></tr>
      <tr><td>Email</td><td>{{user()?.email}}</td></tr>
      <tr><td>Active</td><td>{{user()?.active ? "Active" : "Inactive"}}</td></tr>
    </table>
  } @else {
    <div>
      User not found
    </div>
  }
  `,
  styleUrl: './user-detail-http-page.css',
})
export class UserDetailHttpPage implements OnInit {

  private route = inject(ActivatedRoute)  ;
  userId = Number(this.route.snapshot.paramMap.get("id"));
  private userService = inject(UsersHttpService);
  user = signal<User | undefined>(undefined);

  constructor() {
    // don't do asynchronous operations here us ngOnInit instead
  }
  ngOnInit(): void {
    this.userService.getUser(this.userId)
      .subscribe(data=>this.user.set(data));
  }
}
