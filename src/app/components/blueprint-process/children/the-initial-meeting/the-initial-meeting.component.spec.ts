import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheInitialMeetingComponent } from './the-initial-meeting.component';

describe('TheInitialMeetingComponent', () => {
  let component: TheInitialMeetingComponent;
  let fixture: ComponentFixture<TheInitialMeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheInitialMeetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheInitialMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
