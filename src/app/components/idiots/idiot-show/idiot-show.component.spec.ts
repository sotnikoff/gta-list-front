import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdiotShowComponent } from './idiot-show.component';

describe('IdiotShowComponent', () => {
  let component: IdiotShowComponent;
  let fixture: ComponentFixture<IdiotShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdiotShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdiotShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
