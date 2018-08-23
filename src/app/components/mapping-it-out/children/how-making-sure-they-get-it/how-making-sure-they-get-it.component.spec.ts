import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowMakingSureTheyGetItComponent } from './how-making-sure-they-get-it.component';

describe('HowMakingSureTheyGetItComponent', () => {
  let component: HowMakingSureTheyGetItComponent;
  let fixture: ComponentFixture<HowMakingSureTheyGetItComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowMakingSureTheyGetItComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowMakingSureTheyGetItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
