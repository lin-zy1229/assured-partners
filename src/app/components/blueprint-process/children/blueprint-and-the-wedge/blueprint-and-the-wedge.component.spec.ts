import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueprintAndTheWedgeComponent } from './blueprint-and-the-wedge.component';

describe('BlueprintAndTheWedgeComponent', () => {
  let component: BlueprintAndTheWedgeComponent;
  let fixture: ComponentFixture<BlueprintAndTheWedgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlueprintAndTheWedgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueprintAndTheWedgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
