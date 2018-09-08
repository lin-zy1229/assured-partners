import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DilemmaSubitemComponent } from './dilemma-subitem.component';

describe('DilemmaSubitemComponent', () => {
  let component: DilemmaSubitemComponent;
  let fixture: ComponentFixture<DilemmaSubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DilemmaSubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DilemmaSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
