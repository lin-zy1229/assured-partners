import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheChangeFormulaComponent } from './the-change-formula.component';

describe('TheChangeFormulaComponent', () => {
  let component: TheChangeFormulaComponent;
  let fixture: ComponentFixture<TheChangeFormulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheChangeFormulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheChangeFormulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
