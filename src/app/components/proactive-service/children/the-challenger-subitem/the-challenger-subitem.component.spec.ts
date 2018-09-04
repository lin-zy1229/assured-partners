import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheChallengerSubitemComponent } from './the-challenger-subitem.component';

describe('TheChallengerSubitemComponent', () => {
  let component: TheChallengerSubitemComponent;
  let fixture: ComponentFixture<TheChallengerSubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheChallengerSubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheChallengerSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
