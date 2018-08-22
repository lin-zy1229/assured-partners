import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APowerfulDiscoverySessionComponent } from './apowerful-discovery-session.component';

describe('APowerfulDiscoverySessionComponent', () => {
  let component: APowerfulDiscoverySessionComponent;
  let fixture: ComponentFixture<APowerfulDiscoverySessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ APowerfulDiscoverySessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(APowerfulDiscoverySessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
