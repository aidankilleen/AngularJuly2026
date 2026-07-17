import { Component, inject, OnInit, signal, TemplateRef } from '@angular/core';
import { UsersHttpService } from '../users-http-service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { NgbModal, NgbTooltip, NgbToast } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users-page',
  imports: [AsyncPipe, JsonPipe, FormsModule, NgbTooltip, NgbToast],
  template: `
    <h2>Users</h2>

    <button
      placement="right"
      ngbTooltip="Add User"
      class="btn btn-success"
      (click)="onAdd(content)"
    >
      <i class="bi bi-person-plus"></i>
    </button>
    <table class="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Active</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        @if (users()) {

          @for (user of users(); track user.id) {
            <tr>
              <td>{{ user.id }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.active }}</td>
              <td>
                <button
                  placement="top"
                  ngbTooltip="Delete User"
                  class="btn btn-danger btn-sm"
                  (click)="onDelete(user.id, confirmModalContent)"
                >
                  <i class="bi bi-trash"></i>
                </button>
                <button
                  placement="top"
                  ngbTooltip="Edit User"
                  class="btn btn-secondary btn-sm"
                  (click)="onEdit(user, content)"
                >
                  <i class="bi bi-pencil-square"></i>
                </button>
              </td>
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
    </ng-template>

    <ng-template #confirmModalContent let-confirmModal>
      <div class="modal-header">
        <h3>Are you sure?</h3>
      </div>
      <div class="modal-body">
        <p>{{ confirmMessage() }}</p>
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-outline-secondary"
          (click)="confirmModal.close('confirmed')">
          Ok
        </button>
        <button
          type="button"
          class="btn btn-outline-secondary"
          (click)="confirmModal.dismiss('cancelled')">
          Cancel
        </button>
      </div>
    </ng-template>

    <div class="toast-container position-fixed bottom-0 end-0 p-3">
        @for(toast of toasts(); track toast.id) {
          <ngb-toast
            class="bg-danger text-white"
            [header]="toast.title"
            [autohide]="true"
            [delay]="10000"
            (hidden)="removeToast(toast.id)"
          >
            {{ toast.message }}
          </ngb-toast>
        }
    </div>
  `,
  styleUrl: './users-page.css',
})
export class UsersPage implements OnInit {

  removeToast(id:number) {
    this.toasts.update(
      current => current.filter(toast=>toast.id != id))
  }

  toasts = signal<{id:number, title:string, message:string}[]>([
    {id:1, title:"User Deleted",message:"User 1 Deleted"}
  ]);
  userService = inject(UsersHttpService);
  users = signal<User[]>([]);
  modalService = inject(NgbModal);
  adding = signal<boolean>(true);
  editingUser = signal<User>({id:-1, name:"", email:"", active:false});
  confirmMessage = signal<string>("Are you sure?");

  onEdit(user:User, content: TemplateRef<any>) {
    this.editingUser.set({...user});
    this.adding.set(false);
    this.modalService.open(content)
      .result.then(
        () => {
          this.userService.updateUser(this.editingUser())
            .subscribe(
              updatedUser => this.users.update(
                current => current.map(
                  user => user.id != updatedUser.id ? user : updatedUser
                )
              )
            );
        },
        () => {
          //alert("cancelled");
        }
      );
  }
  onDelete(id:number, content: TemplateRef<any>) {

    this.confirmMessage.set(`Delete user ${id}?`)
    this.modalService.open(content)
      .result.then(
        () => {
          this.userService.deleteUser(id)
            .subscribe(
              ()=>this.users.update(
                current=>current.filter(user=>user.id!=id)
              )
            );
          this.showToast("User Deleted", `User ${id} deleted`);
        },
        () => {
        });
  }
  showToast(title:string, message:string) {
    this.toasts.update(
      current => [...current, {id: current.length+1, title, message}]
    )
  }
  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe(data => this.users.set(data));
  }
  onAdd(content: TemplateRef<any>) {
    this.editingUser.set({id:-1, name:"", email:"", active:false});
    this.adding.set(true);

    this.modalService.open(content)
      .result.then(
        result => {
          this.userService.addUser(this.editingUser())
            .subscribe(
              addedUser=>this.users.update(
                current => current.concat([addedUser])
              )
            )
        },
        reason => {
          //alert("dismissed");
        });
  }
}
