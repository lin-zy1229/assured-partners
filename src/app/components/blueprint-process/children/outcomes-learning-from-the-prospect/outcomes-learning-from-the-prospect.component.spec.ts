import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutcomesLearningFromTheProspectComponent } from './outcomes-learning-from-the-prospect.component';

describe('OutcomesLearningFromTheProspectComponent', () => {
  let component: OutcomesLearningFromTheProspectComponent;
  let fixture: ComponentFixture<OutcomesLearningFromTheProspectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutcomesLearningFromTheProspectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutcomesLearningFromTheProspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
