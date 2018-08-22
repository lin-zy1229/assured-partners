import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProactiveServiceComponent } from './proactive-service.component';

describe('ProactiveServiceComponent', () => {
  let component: ProactiveServiceComponent;
  let fixture: ComponentFixture<ProactiveServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProactiveServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProactiveServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
