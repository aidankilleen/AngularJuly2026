import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncPipePage } from './async-pipe-page';

describe('AsyncPipePage', () => {
  let component: AsyncPipePage;
  let fixture: ComponentFixture<AsyncPipePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsyncPipePage],
    }).compileComponents();

    fixture = TestBed.createComponent(AsyncPipePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
