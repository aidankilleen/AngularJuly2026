import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameSelector } from './name-selector';

describe('NameSelector', () => {
  let component: NameSelector;
  let fixture: ComponentFixture<NameSelector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NameSelector],
    }).compileComponents();

    fixture = TestBed.createComponent(NameSelector);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
