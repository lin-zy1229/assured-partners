import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesSubitemComponent } from './notes-subitem.component';

describe('NotesSubitemComponent', () => {
  let component: NotesSubitemComponent;
  let fixture: ComponentFixture<NotesSubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesSubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
