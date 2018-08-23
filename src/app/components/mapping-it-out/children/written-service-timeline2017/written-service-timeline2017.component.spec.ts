import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrittenServiceTimeline2017Component } from './written-service-timeline2017.component';

describe('WrittenServiceTimeline2017Component', () => {
  let component: WrittenServiceTimeline2017Component;
  let fixture: ComponentFixture<WrittenServiceTimeline2017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrittenServiceTimeline2017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrittenServiceTimeline2017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
