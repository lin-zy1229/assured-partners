import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheIntellectualResponseContSubitemComponent } from './the-intellectual-response-cont-subitem.component';

describe('TheIntellectualResponseContSubitemComponent', () => {
  let component: TheIntellectualResponseContSubitemComponent;
  let fixture: ComponentFixture<TheIntellectualResponseContSubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheIntellectualResponseContSubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheIntellectualResponseContSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
