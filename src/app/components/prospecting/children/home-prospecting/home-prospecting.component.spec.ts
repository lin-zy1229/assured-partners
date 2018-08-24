import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProspectingComponent } from './home-prospecting.component';

describe('HomeProspectingComponent', () => {
  let component: HomeProspectingComponent;
  let fixture: ComponentFixture<HomeProspectingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeProspectingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeProspectingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
