import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmenuAreaComponent } from './submenu-area.component';

describe('SubmenuAreaComponent', () => {
  let component: SubmenuAreaComponent;
  let fixture: ComponentFixture<SubmenuAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmenuAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmenuAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
