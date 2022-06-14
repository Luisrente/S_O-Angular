import { TestBed } from '@angular/core/testing';

import { ConsulService } from './consul.service';

describe('ConsulService', () => {
  let service: ConsulService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsulService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
