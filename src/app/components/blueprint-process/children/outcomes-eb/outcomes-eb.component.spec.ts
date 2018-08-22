import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutcomesEBComponent } from './outcomes-eb.component';

describe('OutcomesEBComponent', () => {
  let component: OutcomesEBComponent;
  let fixture: ComponentFixture<OutcomesEBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutcomesEBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutcomesEBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
