import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectiveResultSubitemComponent } from './objective-result-subitem.component';

describe('ObjectiveResultSubitemComponent', () => {
  let component: ObjectiveResultSubitemComponent;
  let fixture: ComponentFixture<ObjectiveResultSubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectiveResultSubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectiveResultSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
