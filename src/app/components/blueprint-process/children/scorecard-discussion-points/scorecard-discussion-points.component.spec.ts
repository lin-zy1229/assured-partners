import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorecardDiscussionPointsComponent } from './scorecard-discussion-points.component';

describe('ScorecardDiscussionPointsComponent', () => {
  let component: ScorecardDiscussionPointsComponent;
  let fixture: ComponentFixture<ScorecardDiscussionPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScorecardDiscussionPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScorecardDiscussionPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
