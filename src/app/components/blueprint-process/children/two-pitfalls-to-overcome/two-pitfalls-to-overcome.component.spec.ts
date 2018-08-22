import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoPitfallsToOvercomeComponent } from './two-pitfalls-to-overcome.component';

describe('TwoPitfallsToOvercomeComponent', () => {
  let component: TwoPitfallsToOvercomeComponent;
  let fixture: ComponentFixture<TwoPitfallsToOvercomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoPitfallsToOvercomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoPitfallsToOvercomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
