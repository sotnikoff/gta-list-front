import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdiotsNewComponent } from './idiots-new.component';

describe('IdiotsNewComponent', () => {
  let component: IdiotsNewComponent;
  let fixture: ComponentFixture<IdiotsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdiotsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdiotsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
