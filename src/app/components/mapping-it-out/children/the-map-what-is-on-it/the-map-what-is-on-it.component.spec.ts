import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheMapWhatIsOnItComponent } from './the-map-what-is-on-it.component';

describe('TheMapWhatIsOnItComponent', () => {
  let component: TheMapWhatIsOnItComponent;
  let fixture: ComponentFixture<TheMapWhatIsOnItComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheMapWhatIsOnItComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheMapWhatIsOnItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
