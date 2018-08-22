import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheInitialMeetingTheOpenComponent } from './the-initial-meeting-the-open.component';

describe('TheInitialMeetingTheOpenComponent', () => {
  let component: TheInitialMeetingTheOpenComponent;
  let fixture: ComponentFixture<TheInitialMeetingTheOpenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheInitialMeetingTheOpenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheInitialMeetingTheOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
