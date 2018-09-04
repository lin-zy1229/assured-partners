import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterOfInfluenceWorksheetSubitemComponent } from './center-of-influence-worksheet-subitem.component';

describe('CenterOfInfluenceWorksheetSubitemComponent', () => {
  let component: CenterOfInfluenceWorksheetSubitemComponent;
  let fixture: ComponentFixture<CenterOfInfluenceWorksheetSubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterOfInfluenceWorksheetSubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterOfInfluenceWorksheetSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
