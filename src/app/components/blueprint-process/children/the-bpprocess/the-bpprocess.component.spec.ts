import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBPProcessComponent } from './the-bpprocess.component';

describe('TheBPProcessComponent', () => {
  let component: TheBPProcessComponent;
  let fixture: ComponentFixture<TheBPProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheBPProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheBPProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
