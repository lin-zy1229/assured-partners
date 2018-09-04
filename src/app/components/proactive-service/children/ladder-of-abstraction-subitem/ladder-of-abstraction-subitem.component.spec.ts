import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LadderOfAbstractionSubitemComponent } from './ladder-of-abstraction-subitem.component';

describe('LadderOfAbstractionSubitemComponent', () => {
  let component: LadderOfAbstractionSubitemComponent;
  let fixture: ComponentFixture<LadderOfAbstractionSubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LadderOfAbstractionSubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LadderOfAbstractionSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
