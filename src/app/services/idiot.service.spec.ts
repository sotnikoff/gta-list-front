import { TestBed } from '@angular/core/testing';

import { IdiotService } from './idiot.service';

describe('IdiotService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IdiotService = TestBed.get(IdiotService);
    expect(service).toBeTruthy();
  });
});
