import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersHttpPage } from './users-http-page';

describe('UsersHttpPage', () => {
  let component: UsersHttpPage;
  let fixture: ComponentFixture<UsersHttpPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersHttpPage],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersHttpPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
