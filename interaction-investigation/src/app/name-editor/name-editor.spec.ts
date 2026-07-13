import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameEditor } from './name-editor';

describe('NameEditor', () => {
  let component: NameEditor;
  let fixture: ComponentFixture<NameEditor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NameEditor],
    }).compileComponents();

    fixture = TestBed.createComponent(NameEditor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
