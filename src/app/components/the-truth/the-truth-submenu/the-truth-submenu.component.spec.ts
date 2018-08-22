import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheTruthSubmenuComponent } from './the-truth-submenu.component';

describe('TheTruthSubmenuComponent', () => {
  let component: TheTruthSubmenuComponent;
  let fixture: ComponentFixture<TheTruthSubmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheTruthSubmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheTruthSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
