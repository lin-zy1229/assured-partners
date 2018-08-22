import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectingSubmenuComponent } from './prospecting-submenu.component';

describe('ProspectingSubmenuComponent', () => {
  let component: ProspectingSubmenuComponent;
  let fixture: ComponentFixture<ProspectingSubmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProspectingSubmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspectingSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
