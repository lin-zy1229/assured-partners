import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouchesWeek3GettingMeetingSubitemComponent } from './touches-week3-getting-meeting-subitem.component';

describe('TouchesWeek3GettingMeetingSubitemComponent', () => {
  let component: TouchesWeek3GettingMeetingSubitemComponent;
  let fixture: ComponentFixture<TouchesWeek3GettingMeetingSubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouchesWeek3GettingMeetingSubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouchesWeek3GettingMeetingSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
