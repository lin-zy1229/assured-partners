import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetsTryOneOfYourOwnSubitemComponent } from './lets-try-one-of-your-own-subitem.component';

describe('LetsTryOneOfYourOwnSubitemComponent', () => {
  let component: LetsTryOneOfYourOwnSubitemComponent;
  let fixture: ComponentFixture<LetsTryOneOfYourOwnSubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetsTryOneOfYourOwnSubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetsTryOneOfYourOwnSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
