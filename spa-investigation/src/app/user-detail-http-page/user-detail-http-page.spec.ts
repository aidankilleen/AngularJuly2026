import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailHttpPage } from './user-detail-http-page';

describe('UserDetailHttpPage', () => {
  let component: UserDetailHttpPage;
  let fixture: ComponentFixture<UserDetailHttpPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDetailHttpPage],
    }).compileComponents();

    fixture = TestBed.createComponent(UserDetailHttpPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
