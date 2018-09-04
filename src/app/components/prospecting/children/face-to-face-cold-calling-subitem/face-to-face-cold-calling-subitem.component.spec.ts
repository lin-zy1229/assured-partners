import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceToFaceColdCallingSubitemComponent } from './face-to-face-cold-calling-subitem.component';

describe('FaceToFaceColdCallingSubitemComponent', () => {
  let component: FaceToFaceColdCallingSubitemComponent;
  let fixture: ComponentFixture<FaceToFaceColdCallingSubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceToFaceColdCallingSubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceToFaceColdCallingSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
