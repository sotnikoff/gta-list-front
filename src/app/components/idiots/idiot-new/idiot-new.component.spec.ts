import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdiotNewComponent } from './idiot-new.component';

describe('IdiotNewComponent', () => {
  let component: IdiotNewComponent;
  let fixture: ComponentFixture<IdiotNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdiotNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdiotNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
