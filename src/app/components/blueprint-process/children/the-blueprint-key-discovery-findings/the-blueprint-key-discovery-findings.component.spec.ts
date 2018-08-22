import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBlueprintKeyDiscoveryFindingsComponent } from './the-blueprint-key-discovery-findings.component';

describe('TheBlueprintKeyDiscoveryFindingsComponent', () => {
  let component: TheBlueprintKeyDiscoveryFindingsComponent;
  let fixture: ComponentFixture<TheBlueprintKeyDiscoveryFindingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheBlueprintKeyDiscoveryFindingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheBlueprintKeyDiscoveryFindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
