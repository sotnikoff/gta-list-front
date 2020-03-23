import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersProceedComponent } from './users-proceed.component';

describe('UsersProceedComponent', () => {
  let component: UsersProceedComponent;
  let fixture: ComponentFixture<UsersProceedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersProceedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersProceedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
