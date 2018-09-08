import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReallySubitemComponent } from './really-subitem.component';

describe('ReallySubitemComponent', () => {
  let component: ReallySubitemComponent;
  let fixture: ComponentFixture<ReallySubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReallySubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReallySubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
