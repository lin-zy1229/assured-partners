import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheCrystalBallSubitemComponent } from './the-crystal-ball-subitem.component';

describe('TheCrystalBallSubitemComponent', () => {
  let component: TheCrystalBallSubitemComponent;
  let fixture: ComponentFixture<TheCrystalBallSubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheCrystalBallSubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheCrystalBallSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
