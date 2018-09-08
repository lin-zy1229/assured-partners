import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatAreOtherQuestionsSubitemComponent } from './what-are-other-questions-subitem.component';

describe('WhatAreOtherQuestionsSubitemComponent', () => {
  let component: WhatAreOtherQuestionsSubitemComponent;
  let fixture: ComponentFixture<WhatAreOtherQuestionsSubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatAreOtherQuestionsSubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatAreOtherQuestionsSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
