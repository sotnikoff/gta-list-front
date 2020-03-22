import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokensIndexComponent } from './tokens-index.component';

describe('TokensIndexComponent', () => {
  let component: TokensIndexComponent;
  let fixture: ComponentFixture<TokensIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokensIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokensIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
