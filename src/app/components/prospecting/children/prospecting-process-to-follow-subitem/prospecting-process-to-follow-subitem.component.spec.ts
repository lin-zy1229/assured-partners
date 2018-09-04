import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectingProcessToFollowSubitemComponent } from './prospecting-process-to-follow-subitem.component';

describe('ProspectingProcessToFollowSubitemComponent', () => {
  let component: ProspectingProcessToFollowSubitemComponent;
  let fixture: ComponentFixture<ProspectingProcessToFollowSubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProspectingProcessToFollowSubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspectingProcessToFollowSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
