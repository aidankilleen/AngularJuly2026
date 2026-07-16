import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDialogPage } from './user-dialog-page';

describe('UserDialogPage', () => {
  let component: UserDialogPage;
  let fixture: ComponentFixture<UserDialogPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDialogPage],
    }).compileComponents();

    fixture = TestBed.createComponent(UserDialogPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
