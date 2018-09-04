import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulationOfThe3AProcessSubitemComponent } from './articulation-of-the3-aprocess-subitem.component';

describe('ArticulationOfThe3AProcessSubitemComponent', () => {
  let component: ArticulationOfThe3AProcessSubitemComponent;
  let fixture: ComponentFixture<ArticulationOfThe3AProcessSubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticulationOfThe3AProcessSubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulationOfThe3AProcessSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
