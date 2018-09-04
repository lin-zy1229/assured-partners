import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyPostOnLinkedInSubitemComponent } from './why-post-on-linked-in-subitem.component';

describe('WhyPostOnLinkedInSubitemComponent', () => {
  let component: WhyPostOnLinkedInSubitemComponent;
  let fixture: ComponentFixture<WhyPostOnLinkedInSubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyPostOnLinkedInSubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyPostOnLinkedInSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
