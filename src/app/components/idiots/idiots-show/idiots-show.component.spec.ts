import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdiotsShowComponent } from './idiots-show.component';

describe('IdiotsShowComponent', () => {
  let component: IdiotsShowComponent;
  let fixture: ComponentFixture<IdiotsShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdiotsShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdiotsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
