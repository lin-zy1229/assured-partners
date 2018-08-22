import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheScorecardComponent } from './the-scorecard.component';

describe('TheScorecardComponent', () => {
  let component: TheScorecardComponent;
  let fixture: ComponentFixture<TheScorecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheScorecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheScorecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
