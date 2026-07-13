import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtMessage } from './pt-message';

describe('PtMessage', () => {
  let component: PtMessage;
  let fixture: ComponentFixture<PtMessage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PtMessage],
    }).compileComponents();

    fixture = TestBed.createComponent(PtMessage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
