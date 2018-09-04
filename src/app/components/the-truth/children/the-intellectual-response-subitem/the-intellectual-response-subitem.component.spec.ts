import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheIntellectualResponseSubitemComponent } from './the-intellectual-response-subitem.component';

describe('TheIntellectualResponseSubitemComponent', () => {
  let component: TheIntellectualResponseSubitemComponent;
  let fixture: ComponentFixture<TheIntellectualResponseSubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheIntellectualResponseSubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheIntellectualResponseSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
