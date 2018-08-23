import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MappingItOutSubItemComponent } from './mapping-it-out-sub-item.component';

describe('MappingItOutSubItemComponent', () => {
  let component: MappingItOutSubItemComponent;
  let fixture: ComponentFixture<MappingItOutSubItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MappingItOutSubItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MappingItOutSubItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
