import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AReferralOrAnIntroductionSubitemComponent } from './areferral-or-an-introduction-subitem.component';

describe('AReferralOrAnIntroductionSubitemComponent', () => {
  let component: AReferralOrAnIntroductionSubitemComponent;
  let fixture: ComponentFixture<AReferralOrAnIntroductionSubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AReferralOrAnIntroductionSubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AReferralOrAnIntroductionSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
