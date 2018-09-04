import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWouldYouSayAboutUsSubitemComponent } from './what-would-you-say-about-us-subitem.component';

describe('WhatWouldYouSayAboutUsSubitemComponent', () => {
  let component: WhatWouldYouSayAboutUsSubitemComponent;
  let fixture: ComponentFixture<WhatWouldYouSayAboutUsSubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatWouldYouSayAboutUsSubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatWouldYouSayAboutUsSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
