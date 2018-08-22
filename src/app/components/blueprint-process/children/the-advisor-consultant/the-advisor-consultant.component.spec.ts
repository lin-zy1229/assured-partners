import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheAdvisorConsultantComponent } from './the-advisor-consultant.component';

describe('TheAdvisorConsultantComponent', () => {
  let component: TheAdvisorConsultantComponent;
  let fixture: ComponentFixture<TheAdvisorConsultantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheAdvisorConsultantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheAdvisorConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
