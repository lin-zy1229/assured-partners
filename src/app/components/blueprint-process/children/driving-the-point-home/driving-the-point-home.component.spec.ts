import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivingThePointHomeComponent } from './driving-the-point-home.component';

describe('DrivingThePointHomeComponent', () => {
  let component: DrivingThePointHomeComponent;
  let fixture: ComponentFixture<DrivingThePointHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrivingThePointHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrivingThePointHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
