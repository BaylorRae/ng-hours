import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableTimeComponent } from './editable-time.component';

describe('EditableTimeComponent', () => {
  let component: EditableTimeComponent;
  let fixture: ComponentFixture<EditableTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditableTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
