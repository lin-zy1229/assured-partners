import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeverageRelationSubmenuComponent } from './leverage-relation-submenu.component';

describe('LeverageRelationSubmenuComponent', () => {
  let component: LeverageRelationSubmenuComponent;
  let fixture: ComponentFixture<LeverageRelationSubmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeverageRelationSubmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeverageRelationSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
