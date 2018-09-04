import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingTheStageSubitemComponent } from './setting-the-stage-subitem.component';

describe('SettingTheStageSubitemComponent', () => {
  let component: SettingTheStageSubitemComponent;
  let fixture: ComponentFixture<SettingTheStageSubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingTheStageSubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingTheStageSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
