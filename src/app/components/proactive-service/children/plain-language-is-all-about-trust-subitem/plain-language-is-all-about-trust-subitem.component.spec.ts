import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlainLanguageIsAllAboutTrustSubitemComponent } from './plain-language-is-all-about-trust-subitem.component';

describe('PlainLanguageIsAllAboutTrustSubitemComponent', () => {
  let component: PlainLanguageIsAllAboutTrustSubitemComponent;
  let fixture: ComponentFixture<PlainLanguageIsAllAboutTrustSubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlainLanguageIsAllAboutTrustSubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlainLanguageIsAllAboutTrustSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
