import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheRehearsalStepsSubitemComponent } from './the-rehearsal-steps-subitem.component';

describe('TheRehearsalStepsSubitemComponent', () => {
  let component: TheRehearsalStepsSubitemComponent;
  let fixture: ComponentFixture<TheRehearsalStepsSubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheRehearsalStepsSubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheRehearsalStepsSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
