import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouchesBeginningYourRelationshipCampaignSubitemComponent } from './touches-beginning-your-relationship-campaign-subitem.component';

describe('TouchesBeginningYourRelationshipCampaignSubitemComponent', () => {
  let component: TouchesBeginningYourRelationshipCampaignSubitemComponent;
  let fixture: ComponentFixture<TouchesBeginningYourRelationshipCampaignSubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouchesBeginningYourRelationshipCampaignSubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouchesBeginningYourRelationshipCampaignSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
