import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentingToWinComponent } from './presenting-to-win.component';

describe('PresentingToWinComponent', () => {
  let component: PresentingToWinComponent;
  let fixture: ComponentFixture<PresentingToWinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentingToWinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentingToWinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
