import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A3ClaimsReviewProcessSubitemComponent } from './a3-claims-review-process-subitem.component';

describe('A3ClaimsReviewProcessSubitemComponent', () => {
  let component: A3ClaimsReviewProcessSubitemComponent;
  let fixture: ComponentFixture<A3ClaimsReviewProcessSubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A3ClaimsReviewProcessSubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A3ClaimsReviewProcessSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
