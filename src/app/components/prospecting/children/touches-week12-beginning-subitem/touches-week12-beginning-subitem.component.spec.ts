import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouchesWeek12BeginningSubitemComponent } from './touches-week12-beginning-subitem.component';

describe('TouchesWeek12BeginningSubitemComponent', () => {
  let component: TouchesWeek12BeginningSubitemComponent;
  let fixture: ComponentFixture<TouchesWeek12BeginningSubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouchesWeek12BeginningSubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouchesWeek12BeginningSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
