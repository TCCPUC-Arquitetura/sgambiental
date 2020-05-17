import { TestBed } from '@angular/core/testing';

import { AffectedService } from './affected.service';

describe('AffectedService', () => {
  let service: AffectedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AffectedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
