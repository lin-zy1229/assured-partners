import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinnerWithFriendsComponent } from './dinner-with-friends.component';

describe('DinnerWithFriendsComponent', () => {
  let component: DinnerWithFriendsComponent;
  let fixture: ComponentFixture<DinnerWithFriendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinnerWithFriendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinnerWithFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
