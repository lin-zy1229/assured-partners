import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingTheStageComponent } from './setting-the-stage.component';

describe('SettingTheStageComponent', () => {
  let component: SettingTheStageComponent;
  let fixture: ComponentFixture<SettingTheStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingTheStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingTheStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
