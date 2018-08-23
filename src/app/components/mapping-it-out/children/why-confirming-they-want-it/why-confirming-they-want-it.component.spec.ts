import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyConfirmingTheyWantItComponent } from './why-confirming-they-want-it.component';

describe('WhyConfirmingTheyWantItComponent', () => {
  let component: WhyConfirmingTheyWantItComponent;
  let fixture: ComponentFixture<WhyConfirmingTheyWantItComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyConfirmingTheyWantItComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyConfirmingTheyWantItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
