import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutcomesPCComponent } from './outcomes-pc.component';

describe('OutcomesPCComponent', () => {
  let component: OutcomesPCComponent;
  let fixture: ComponentFixture<OutcomesPCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutcomesPCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutcomesPCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
