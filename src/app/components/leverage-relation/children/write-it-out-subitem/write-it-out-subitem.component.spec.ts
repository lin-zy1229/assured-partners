import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteItOutSubitemComponent } from './write-it-out-subitem.component';

describe('WriteItOutSubitemComponent', () => {
  let component: WriteItOutSubitemComponent;
  let fixture: ComponentFixture<WriteItOutSubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteItOutSubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteItOutSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
