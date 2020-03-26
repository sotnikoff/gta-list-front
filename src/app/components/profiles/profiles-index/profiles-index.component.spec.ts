import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesIndexComponent } from './profiles-index.component';

describe('ProfilesIndexComponent', () => {
  let component: ProfilesIndexComponent;
  let fixture: ComponentFixture<ProfilesIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilesIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
