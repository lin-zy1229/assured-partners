import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheFiveCategoriesOfSalesPeopleSubitemComponent } from './the-five-categories-of-sales-people-subitem.component';

describe('TheFiveCategoriesOfSalesPeopleSubitemComponent', () => {
  let component: TheFiveCategoriesOfSalesPeopleSubitemComponent;
  let fixture: ComponentFixture<TheFiveCategoriesOfSalesPeopleSubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheFiveCategoriesOfSalesPeopleSubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheFiveCategoriesOfSalesPeopleSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
