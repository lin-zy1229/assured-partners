import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefiningProactiveServiceSubitemComponent } from './defining-proactive-service-subitem.component';

describe('DefiningProactiveServiceSubitemComponent', () => {
  let component: DefiningProactiveServiceSubitemComponent;
  let fixture: ComponentFixture<DefiningProactiveServiceSubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefiningProactiveServiceSubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefiningProactiveServiceSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
