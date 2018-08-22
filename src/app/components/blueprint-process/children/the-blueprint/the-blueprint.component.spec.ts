import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBlueprintComponent } from './the-blueprint.component';

describe('TheBlueprintComponent', () => {
  let component: TheBlueprintComponent;
  let fixture: ComponentFixture<TheBlueprintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheBlueprintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheBlueprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
