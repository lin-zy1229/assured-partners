import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Outcome1Component } from './outcome1.component';

describe('Outcome1Component', () => {
  let component: Outcome1Component;
  let fixture: ComponentFixture<Outcome1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Outcome1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Outcome1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
