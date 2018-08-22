import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProactiveServiceSubmenuComponent } from './proactive-service-submenu.component';

describe('ProactiveServiceSubmenuComponent', () => {
  let component: ProactiveServiceSubmenuComponent;
  let fixture: ComponentFixture<ProactiveServiceSubmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProactiveServiceSubmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProactiveServiceSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
