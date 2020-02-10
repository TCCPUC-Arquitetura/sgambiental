import { TestBed } from '@angular/core/testing';

import { MiningZoneService } from './mining-zone.service';

describe('MiningZoneService', () => {
  let service: MiningZoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiningZoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
