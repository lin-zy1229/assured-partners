import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeverageRelationComponent } from './leverage-relation.component';

describe('LeverageRelationComponent', () => {
  let component: LeverageRelationComponent;
  let fixture: ComponentFixture<LeverageRelationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeverageRelationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeverageRelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
