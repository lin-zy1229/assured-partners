import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesOfProspectEngagementSubitemComponent } from './rules-of-prospect-engagement-subitem.component';

describe('RulesOfProspectEngagementSubitemComponent', () => {
  let component: RulesOfProspectEngagementSubitemComponent;
  let fixture: ComponentFixture<RulesOfProspectEngagementSubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulesOfProspectEngagementSubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesOfProspectEngagementSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
