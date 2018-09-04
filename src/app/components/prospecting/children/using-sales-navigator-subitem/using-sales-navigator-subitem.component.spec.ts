import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingSalesNavigatorSubitemComponent } from './using-sales-navigator-subitem.component';

describe('UsingSalesNavigatorSubitemComponent', () => {
  let component: UsingSalesNavigatorSubitemComponent;
  let fixture: ComponentFixture<UsingSalesNavigatorSubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsingSalesNavigatorSubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingSalesNavigatorSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
