import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouchesWeek4OrganizingSubitemComponent } from './touches-week4-organizing-subitem.component';

describe('TouchesWeek4OrganizingSubitemComponent', () => {
  let component: TouchesWeek4OrganizingSubitemComponent;
  let fixture: ComponentFixture<TouchesWeek4OrganizingSubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouchesWeek4OrganizingSubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouchesWeek4OrganizingSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
