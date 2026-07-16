import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateVariablePage } from './template-variable-page';

describe('TemplateVariablePage', () => {
  let component: TemplateVariablePage;
  let fixture: ComponentFixture<TemplateVariablePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateVariablePage],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateVariablePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
