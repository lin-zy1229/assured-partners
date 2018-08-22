import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Phase1AndPhase2Component } from './phase1-and-phase2.component';

describe('Phase1AndPhase2Component', () => {
  let component: Phase1AndPhase2Component;
  let fixture: ComponentFixture<Phase1AndPhase2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Phase1AndPhase2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Phase1AndPhase2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
