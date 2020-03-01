import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdiotEditComponent } from './idiot-edit.component';

describe('IdiotEditComponent', () => {
  let component: IdiotEditComponent;
  let fixture: ComponentFixture<IdiotEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdiotEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdiotEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
