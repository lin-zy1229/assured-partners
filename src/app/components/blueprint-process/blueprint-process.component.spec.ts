import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueprintProcessComponent } from './blueprint-process.component';

describe('BlueprintProcessComponent', () => {
  let component: BlueprintProcessComponent;
  let fixture: ComponentFixture<BlueprintProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlueprintProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueprintProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
