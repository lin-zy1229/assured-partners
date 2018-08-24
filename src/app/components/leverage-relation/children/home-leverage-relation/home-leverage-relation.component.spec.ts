import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLeverageRelationComponent } from './home-leverage-relation.component';

describe('HomeLeverageRelationComponent', () => {
  let component: HomeLeverageRelationComponent;
  let fixture: ComponentFixture<HomeLeverageRelationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLeverageRelationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLeverageRelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
