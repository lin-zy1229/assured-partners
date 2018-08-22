import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MappingItOutComponent } from './mapping-it-out.component';

describe('MappingItOutComponent', () => {
  let component: MappingItOutComponent;
  let fixture: ComponentFixture<MappingItOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MappingItOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MappingItOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
