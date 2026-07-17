import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveInvestigationPage } from './directive-investigation-page';

describe('DirectiveInvestigationPage', () => {
  let component: DirectiveInvestigationPage;
  let fixture: ComponentFixture<DirectiveInvestigationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveInvestigationPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DirectiveInvestigationPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
