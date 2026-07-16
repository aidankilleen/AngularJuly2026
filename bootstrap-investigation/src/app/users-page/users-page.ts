import { Component, inject, signal, TemplateRef } from '@angular/core';
import { UsersHttpService } from '../users-http-service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users-page',
  imports: [AsyncPipe, JsonPipe, FormsModule],
  template: `
    <h2>Users</h2>

    <button
      class="btn btn-success"
      (click)="onAdd(content)"
    >
      Add
    </button>
    <table class="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Active</th>
        </tr>
      </thead>
      <tbody>
        @if (users$ | async; as users ) {

          @for (user of users; track user.id) {
            <tr>
              <td>{{ user.id }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.active }}</td>
            </tr>
          }
        }
      </tbody>
    </table>

    <ng-template #content let-modal>
      <div class="modal-header">
        <h4
          class="modal-title"
          id="modal-basic-title">
          Profile update
        </h4>
    		<button
          type="button"
          class="btn-close"
          aria-label="Close"
          (click)="modal.dismiss('Cross click')">
        </button>
      </div>
      <div class="modal-body">

        <div class="mb-3">
          <label for="txtName" class="form-label">Name</label>
          <input
            id="txtName"
            type="text"
            class="form-control"
            placeholder="Your Name"
            [(ngModel)]="editingUser().name"
          >
        </div>
        <div class="mb-3">
          <label for="txtEmail" class="form-label">Email</label>
          <input
            id="txtName"
            type="email"
            class="form-control"
            placeholder="name@domain.com"
            [(ngModel)]="editingUser().email"
          >
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="chkActive"
            [(ngModel)]="editingUser().active"
          >
          <label class="form-check-label" for="chkActive">
            Active
          </label>
        </div>


      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-outline-secondary"
          (click)="modal.close('Save click')">
          Save
        </button>

      </div>
      <div class="modal-footer">
        {{ editingUser() | json }}
      </div>

    </ng-template>

  `,
  styleUrl: './users-page.css',
})
export class UsersPage {

  userService = inject(UsersHttpService);
  users$ = this.userService.getUsers();
  modalService = inject(NgbModal);
  adding = signal<boolean>(true);
  editingUser = signal<User>({id:-1, name:"", email:"", active:false});

  onAdd(content: TemplateRef<any>) {
    this.editingUser.set({id:-1, name:"", email:"", active:false});
    this.adding.set(true);

    this.modalService.open(content)
      .result.then(
        result => {
          this.userService.addUser(this.editingUser())
            .subscribe(

            )
        },
        reason => {
          alert("dismissed");
        });

  }
}
