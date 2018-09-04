import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiThreadingSubitemComponent } from './multi-threading-subitem.component';

describe('MultiThreadingSubitemComponent', () => {
  let component: MultiThreadingSubitemComponent;
  let fixture: ComponentFixture<MultiThreadingSubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiThreadingSubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiThreadingSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
