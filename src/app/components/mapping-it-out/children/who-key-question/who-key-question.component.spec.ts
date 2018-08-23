import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoKeyQuestionComponent } from './who-key-question.component';

describe('WhoKeyQuestionComponent', () => {
  let component: WhoKeyQuestionComponent;
  let fixture: ComponentFixture<WhoKeyQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoKeyQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoKeyQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
