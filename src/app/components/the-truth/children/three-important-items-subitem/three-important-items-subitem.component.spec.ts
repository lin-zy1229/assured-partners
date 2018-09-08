import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeImportantItemsSubitemComponent } from './three-important-items-subitem.component';

describe('ThreeImportantItemsSubitemComponent', () => {
  let component: ThreeImportantItemsSubitemComponent;
  let fixture: ComponentFixture<ThreeImportantItemsSubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeImportantItemsSubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeImportantItemsSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
