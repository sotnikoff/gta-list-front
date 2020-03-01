import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdiotFormComponent } from './idiot-form.component';

describe('IdiotFormComponent', () => {
  let component: IdiotFormComponent;
  let fixture: ComponentFixture<IdiotFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdiotFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdiotFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
