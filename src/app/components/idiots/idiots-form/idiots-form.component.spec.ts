import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdiotsFormComponent } from './idiots-form.component';

describe('IdiotsFormComponent', () => {
  let component: IdiotsFormComponent;
  let fixture: ComponentFixture<IdiotsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdiotsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdiotsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
