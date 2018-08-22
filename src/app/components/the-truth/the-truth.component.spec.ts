import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheTruthComponent } from './the-truth.component';

describe('TheTruthComponent', () => {
  let component: TheTruthComponent;
  let fixture: ComponentFixture<TheTruthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheTruthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheTruthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
