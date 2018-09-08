import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingTheStageContSubitemComponent } from './setting-the-stage-cont-subitem.component';

describe('SettingTheStageContSubitemComponent', () => {
  let component: SettingTheStageContSubitemComponent;
  let fixture: ComponentFixture<SettingTheStageContSubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingTheStageContSubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingTheStageContSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
