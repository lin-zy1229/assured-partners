import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatMakesYouDifferentComponent } from './what-makes-you-different.component';

describe('WhatMakesYouDifferentComponent', () => {
  let component: WhatMakesYouDifferentComponent;
  let fixture: ComponentFixture<WhatMakesYouDifferentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatMakesYouDifferentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatMakesYouDifferentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
