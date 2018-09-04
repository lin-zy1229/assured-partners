import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceCoverageServiceSubitemComponent } from './price-coverage-service-subitem.component';

describe('PriceCoverageServiceSubitemComponent', () => {
  let component: PriceCoverageServiceSubitemComponent;
  let fixture: ComponentFixture<PriceCoverageServiceSubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceCoverageServiceSubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceCoverageServiceSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
