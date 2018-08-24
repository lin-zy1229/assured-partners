import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProactiveServiceComponent } from './home-proactive-service.component';

describe('HomeProactiveServiceComponent', () => {
  let component: HomeProactiveServiceComponent;
  let fixture: ComponentFixture<HomeProactiveServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeProactiveServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeProactiveServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
