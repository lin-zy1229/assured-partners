import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreScriptingSubitemComponent } from './more-scripting-subitem.component';

describe('MoreScriptingSubitemComponent', () => {
  let component: MoreScriptingSubitemComponent;
  let fixture: ComponentFixture<MoreScriptingSubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreScriptingSubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreScriptingSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
