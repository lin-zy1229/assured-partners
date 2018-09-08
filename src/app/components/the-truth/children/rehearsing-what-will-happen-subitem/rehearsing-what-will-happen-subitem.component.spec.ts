import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RehearsingWhatWillHappenSubitemComponent } from './rehearsing-what-will-happen-subitem.component';

describe('RehearsingWhatWillHappenSubitemComponent', () => {
  let component: RehearsingWhatWillHappenSubitemComponent;
  let fixture: ComponentFixture<RehearsingWhatWillHappenSubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RehearsingWhatWillHappenSubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RehearsingWhatWillHappenSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
