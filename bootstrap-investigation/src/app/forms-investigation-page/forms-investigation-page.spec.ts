import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsInvestigationPage } from './forms-investigation-page';

describe('FormsInvestigationPage', () => {
  let component: FormsInvestigationPage;
  let fixture: ComponentFixture<FormsInvestigationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsInvestigationPage],
    }).compileComponents();

    fixture = TestBed.createComponent(FormsInvestigationPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
