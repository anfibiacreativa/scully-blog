import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadEntryComponent } from './read-entry.component';

describe('ReadEntryComponent', () => {
  let component: ReadEntryComponent;
  let fixture: ComponentFixture<ReadEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
