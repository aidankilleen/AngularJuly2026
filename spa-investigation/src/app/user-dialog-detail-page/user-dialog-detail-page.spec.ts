import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDialogDetailPage } from './user-dialog-detail-page';

describe('UserDialogDetailPage', () => {
  let component: UserDialogDetailPage;
  let fixture: ComponentFixture<UserDialogDetailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDialogDetailPage],
    }).compileComponents();

    fixture = TestBed.createComponent(UserDialogDetailPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
