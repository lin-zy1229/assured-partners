import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueTableSubitemComponent } from './revenue-table-subitem.component';

describe('RevenueTableSubitemComponent', () => {
  let component: RevenueTableSubitemComponent;
  let fixture: ComponentFixture<RevenueTableSubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevenueTableSubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenueTableSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
