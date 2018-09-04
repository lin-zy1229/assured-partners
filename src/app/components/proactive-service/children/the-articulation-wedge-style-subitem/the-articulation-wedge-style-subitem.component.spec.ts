import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheArticulationWedgeStyleSubitemComponent } from './the-articulation-wedge-style-subitem.component';

describe('TheArticulationWedgeStyleSubitemComponent', () => {
  let component: TheArticulationWedgeStyleSubitemComponent;
  let fixture: ComponentFixture<TheArticulationWedgeStyleSubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheArticulationWedgeStyleSubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheArticulationWedgeStyleSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
