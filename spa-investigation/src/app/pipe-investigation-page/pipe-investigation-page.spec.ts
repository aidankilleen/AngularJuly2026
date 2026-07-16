import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeInvestigationPage } from './pipe-investigation-page';

describe('PipeInvestigationPage', () => {
  let component: PipeInvestigationPage;
  let fixture: ComponentFixture<PipeInvestigationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeInvestigationPage],
    }).compileComponents();

    fixture = TestBed.createComponent(PipeInvestigationPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
