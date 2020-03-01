import { TestBed } from '@angular/core/testing';

import { PServiceService } from './pservice.service';

describe('PServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PServiceService = TestBed.get(PServiceService);
    expect(service).toBeTruthy();
  });
});
