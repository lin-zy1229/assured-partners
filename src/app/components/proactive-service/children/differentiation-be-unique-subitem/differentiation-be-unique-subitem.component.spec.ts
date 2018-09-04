import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferentiationBeUniqueSubitemComponent } from './differentiation-be-unique-subitem.component';

describe('DifferentiationBeUniqueSubitemComponent', () => {
  let component: DifferentiationBeUniqueSubitemComponent;
  let fixture: ComponentFixture<DifferentiationBeUniqueSubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DifferentiationBeUniqueSubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DifferentiationBeUniqueSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
