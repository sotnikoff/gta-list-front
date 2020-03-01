import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdiotsEditComponent } from './idiots-edit.component';

describe('IdiotsEditComponent', () => {
  let component: IdiotsEditComponent;
  let fixture: ComponentFixture<IdiotsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdiotsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdiotsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
