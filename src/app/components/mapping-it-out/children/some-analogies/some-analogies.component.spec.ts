import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeAnalogiesComponent } from './some-analogies.component';

describe('SomeAnalogiesComponent', () => {
  let component: SomeAnalogiesComponent;
  let fixture: ComponentFixture<SomeAnalogiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeAnalogiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeAnalogiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
