import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGoalsSubitemComponent } from './my-goals-subitem.component';

describe('MyGoalsSubitemComponent', () => {
  let component: MyGoalsSubitemComponent;
  let fixture: ComponentFixture<MyGoalsSubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyGoalsSubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGoalsSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
