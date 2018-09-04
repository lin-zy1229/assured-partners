import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrappingUpSubitemComponent } from './wrapping-up-subitem.component';

describe('WrappingUpSubitemComponent', () => {
  let component: WrappingUpSubitemComponent;
  let fixture: ComponentFixture<WrappingUpSubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrappingUpSubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrappingUpSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
