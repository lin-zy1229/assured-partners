import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheVaccumnCleanerSalespersonComponent } from './the-vaccumn-cleaner-salesperson.component';

describe('TheVaccumnCleanerSalespersonComponent', () => {
  let component: TheVaccumnCleanerSalespersonComponent;
  let fixture: ComponentFixture<TheVaccumnCleanerSalespersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheVaccumnCleanerSalespersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheVaccumnCleanerSalespersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
