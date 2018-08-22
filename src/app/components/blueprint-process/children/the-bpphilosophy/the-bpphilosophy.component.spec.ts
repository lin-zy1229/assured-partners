import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBPPhilosophyComponent } from './the-bpphilosophy.component';

describe('TheBPPhilosophyComponent', () => {
  let component: TheBPPhilosophyComponent;
  let fixture: ComponentFixture<TheBPPhilosophyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheBPPhilosophyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheBPPhilosophyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
