import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheArticulationBlueprintStyleSubitemComponent } from './the-articulation-blueprint-style-subitem.component';

describe('TheArticulationBlueprintStyleSubitemComponent', () => {
  let component: TheArticulationBlueprintStyleSubitemComponent;
  let fixture: ComponentFixture<TheArticulationBlueprintStyleSubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheArticulationBlueprintStyleSubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheArticulationBlueprintStyleSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
