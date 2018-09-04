import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A3DefiningProactiveServiceSubitemComponent } from './a3-defining-proactive-service-subitem.component';

describe('A3DefiningProactiveServiceSubitemComponent', () => {
  let component: A3DefiningProactiveServiceSubitemComponent;
  let fixture: ComponentFixture<A3DefiningProactiveServiceSubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A3DefiningProactiveServiceSubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A3DefiningProactiveServiceSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
