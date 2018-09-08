import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalsCostMoneySubitemComponent } from './proposals-cost-money-subitem.component';

describe('ProposalsCostMoneySubitemComponent', () => {
  let component: ProposalsCostMoneySubitemComponent;
  let fixture: ComponentFixture<ProposalsCostMoneySubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposalsCostMoneySubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalsCostMoneySubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
