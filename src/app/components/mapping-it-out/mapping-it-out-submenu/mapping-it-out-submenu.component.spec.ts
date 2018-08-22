import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MappingItOutSubmenuComponent } from './mapping-it-out-submenu.component';

describe('MappingItOutSubmenuComponent', () => {
  let component: MappingItOutSubmenuComponent;
  let fixture: ComponentFixture<MappingItOutSubmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MappingItOutSubmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MappingItOutSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
