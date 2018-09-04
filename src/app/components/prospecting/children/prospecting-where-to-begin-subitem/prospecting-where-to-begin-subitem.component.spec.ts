import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectingWhereToBeginSubitemComponent } from './prospecting-where-to-begin-subitem.component';

describe('ProspectingWhereToBeginSubitemComponent', () => {
  let component: ProspectingWhereToBeginSubitemComponent;
  let fixture: ComponentFixture<ProspectingWhereToBeginSubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProspectingWhereToBeginSubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspectingWhereToBeginSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
