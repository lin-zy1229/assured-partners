import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DilemmaSecondTransitionSubitemComponent } from './dilemma-second-transition-subitem.component';

describe('DilemmaSecondTransitionSubitemComponent', () => {
  let component: DilemmaSecondTransitionSubitemComponent;
  let fixture: ComponentFixture<DilemmaSecondTransitionSubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DilemmaSecondTransitionSubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DilemmaSecondTransitionSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
