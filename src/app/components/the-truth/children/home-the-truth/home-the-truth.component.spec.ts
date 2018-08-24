import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTheTruthComponent } from './home-the-truth.component';

describe('HomeTheTruthComponent', () => {
  let component: HomeTheTruthComponent;
  let fixture: ComponentFixture<HomeTheTruthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTheTruthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTheTruthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
