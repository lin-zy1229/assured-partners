import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOfTheBlueprintProcessComponent } from './home-of-the-blueprint-process.component';

describe('HomeOfTheBlueprintProcessComponent', () => {
  let component: HomeOfTheBlueprintProcessComponent;
  let fixture: ComponentFixture<HomeOfTheBlueprintProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeOfTheBlueprintProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeOfTheBlueprintProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
