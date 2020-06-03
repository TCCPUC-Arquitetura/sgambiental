import { TestBed } from '@angular/core/testing';

import { OcurrencesService } from './ocurrences.service';

describe('OcurrencesService', () => {
  let service: OcurrencesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OcurrencesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
