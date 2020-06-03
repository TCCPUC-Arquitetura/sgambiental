import { TestBed } from '@angular/core/testing';

import { SensorService } from './sensorsservice.service';

describe('SensorsserviceService', () => {
  let service: SensorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SensorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
