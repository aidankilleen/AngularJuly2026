import { Component, input, OnChanges, output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="userForm" (ngSubmit)="onSubmit()">
      <div>
        <label
          class="form-label"
          for="name"
        >
          Name*
        </label>
        <input
          id="name"
          class="form-control"
          formControlName="name"/>

        @if (userForm.controls.name.touched && userForm.controls.name.invalid) {
          <div class="text-danger mt-1">Name is required</div>
        }
      </div>
      <div>
        <label
          class="form-label"
          for="email"
        >
          Email
        </label>
        <input
          id="email"
          class="form-control"
          formControlName="email"/>
        @if (userForm.controls.email.touched && userForm.controls.email.invalid) {
          <div class="text-danger mt-1">

            @if (userForm.controls.email.hasError('required')) {
              <span>Email is required</span>
            } @else {
              <span>Invalid email</span>
            }

          </div>
        }
      </div>
      <div>
        <label
          class="form-check-label"
          for="active"
        >
          Email
        </label>
        <input
          id="active"
          type="checkbox"
          class="form-check-input"
          formControlName="active"/>
      </div>
      <input
        [disabled]="!userForm.valid"
        class="btn btn-primary"
        type="submit"
        value="submit"/>
    </form>
  `,
  styleUrl: './user-form.css',
})
export class UserForm implements OnChanges {
  saved = output<User>();
  user = input.required<User>();

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    active: new FormControl(false)
  });

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['user']) {
      const user = this.user();
      this.userForm.patchValue({
        name: user.name,
        email: user.email,
        active: user.active
      });
    }
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.saved.emit({...this.userForm.value as User})
    } else {
      alert("invalid values");
    }
  }
}
