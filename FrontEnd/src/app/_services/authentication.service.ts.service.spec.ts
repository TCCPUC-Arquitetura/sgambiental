import { TestBed } from '@angular/core/testing';

import { Authentication.Service.TsService } from './authentication.service.ts.service';

describe('Authentication.Service.TsService', () => {
  let service: Authentication.Service.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Authentication.Service.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
