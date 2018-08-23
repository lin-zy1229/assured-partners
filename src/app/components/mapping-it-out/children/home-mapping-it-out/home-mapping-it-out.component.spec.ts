import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMappingItOutComponent } from './home-mapping-it-out.component';

describe('HomeMappingItOutComponent', () => {
  let component: HomeMappingItOutComponent;
  let fixture: ComponentFixture<HomeMappingItOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMappingItOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMappingItOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
