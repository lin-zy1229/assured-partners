import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueprintProcessSubmenuComponent } from './blueprint-process-submenu.component';

describe('BlueprintProcessSubmenuComponent', () => {
  let component: BlueprintProcessSubmenuComponent;
  let fixture: ComponentFixture<BlueprintProcessSubmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlueprintProcessSubmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueprintProcessSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
