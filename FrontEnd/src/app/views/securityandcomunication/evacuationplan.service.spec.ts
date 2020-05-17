import { TestBed } from '@angular/core/testing';

import { EvacuationplanService } from './evacuationplan.service';

describe('EvacuationplanService', () => {
  let service: EvacuationplanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvacuationplanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
