import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSpotlightsSubitemComponent } from './search-spotlights-subitem.component';

describe('SearchSpotlightsSubitemComponent', () => {
  let component: SearchSpotlightsSubitemComponent;
  let fixture: ComponentFixture<SearchSpotlightsSubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSpotlightsSubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSpotlightsSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
